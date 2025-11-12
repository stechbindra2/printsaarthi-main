import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  try {
    const formData = await request.formData();
    const files = [];
    
    // Create uploads directory if it doesn't exist
    const uploadDir = join(process.cwd(), 'uploads');
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Process each file
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        const file = value;
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Generate unique filename with timestamp
        const timestamp = Date.now();
        const filename = `${timestamp}-${file.name}`;
        const filepath = join(uploadDir, filename);

        // Save file
        await writeFile(filepath, buffer);
        
        files.push({
          name: file.name,
          size: file.size,
          type: file.type,
          savedAs: filename,
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: `${files.length} file(s) uploaded successfully`,
      files: files,
    }, { status: 200 });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to upload files',
      error: error.message,
    }, { status: 500 });
  }
}

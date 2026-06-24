'use client'
import React, { useState, useRef } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadComplete, setUploadComplete] = useState(false);
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);

    const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
    const ALLOWED_FILE_TYPES = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'image/jpeg',
        'image/jpg',
        'image/png',
        'text/plain'
    ];

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files);
        setError('');
        setUploadComplete(false);

        // Validate files
        const validFiles = [];
        for (const file of files) {
            if (file.size > MAX_FILE_SIZE) {
                setError(`File ${file.name} exceeds the maximum size of 50MB`);
                continue;
            }
            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                setError(`File ${file.name} has an unsupported format`);
                continue;
            }
            validFiles.push(file);
        }

        setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
    };

    const handleRemoveFile = (index) => {
        setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
        setError('');
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        
        const validFiles = [];
        for (const file of files) {
            if (file.size > MAX_FILE_SIZE) {
                setError(`File ${file.name} exceeds the maximum size of 50MB`);
                continue;
            }
            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                setError(`File ${file.name} has an unsupported format`);
                continue;
            }
            validFiles.push(file);
        }

        setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleUpload = async () => {
        if (selectedFiles.length === 0) {
            setError('Please select at least one file to upload');
            return;
        }

        setUploading(true);
        setError('');
        setUploadProgress(0);

        try {
            const formData = new FormData();
            selectedFiles.forEach((file, index) => {
                formData.append(`file${index}`, file);
            });

            // Simulate upload with progress
            // In production, replace with actual API endpoint
            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    setUploadProgress(percentCompleted);
                },
            });

            if (response.status === 200) {
                setUploadComplete(true);
                setTimeout(() => {
                    // Redirect to WhatsApp with upload confirmation
                    const message = encodeURIComponent(
                        `Hi! I've uploaded ${selectedFiles.length} file(s) for printing. Please confirm my order.`
                    );
                    window.location.href = `https://wa.me/message/W22H3ZBHYRG4H1?text=${message}`;
                }, 2000);
            }
        } catch (err) {
            console.error('Upload error:', err);
            setError('Upload failed. Please try again or contact us via WhatsApp.');
        } finally {
            setUploading(false);
        }
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    };

    return (
        <div className="w-full max-w-4xl mx-auto mt-8 bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-100">
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Upload Your Files</h3>
                <p className="text-gray-600">
                    Upload documents, images, or presentations for printing. We support PDF, DOC, DOCX, PPT, PPTX, JPG, PNG (max 50MB each)
                </p>
            </div>

            {/* Drag and Drop Zone */}
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current?.click()}
                className="border-3 border-dashed border-[#622AD1] rounded-xl p-8 md:p-12 text-center cursor-pointer transition-all duration-300 hover:border-[#F89816] hover:bg-purple-50"
            >
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#622AD1] to-[#F89816] rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-gray-700">
                            Click to upload or drag and drop
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            PDF, DOC, DOCX, PPT, PPTX, JPG, PNG (max 50MB)
                        </p>
                    </div>
                </div>
            </div>

            <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handleFileSelect}
                accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png,.txt"
                className="hidden"
            />

            {/* Selected Files List */}
            {selectedFiles.length > 0 && (
                <div className="mt-6 space-y-3">
                    <h4 className="font-semibold text-gray-900">Selected Files ({selectedFiles.length})</h4>
                    {selectedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <div className="flex items-center space-x-3 flex-1">
                                <svg className="w-6 h-6 text-[#622AD1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                                    <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemoveFile(index)}
                                disabled={uploading}
                                className="ml-4 text-red-500 hover:text-red-700 transition-colors disabled:opacity-50"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-red-700">{error}</p>
                </div>
            )}

            {/* Upload Progress */}
            {uploading && (
                <div className="mt-4">
                    <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Uploading...</span>
                        <span className="text-sm font-medium text-[#622AD1]">{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-[#622AD1] to-[#F89816] h-3 rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                        ></div>
                    </div>
                </div>
            )}

            {/* Success Message */}
            {uploadComplete && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                        <p className="text-sm text-green-700 font-medium">Files uploaded successfully!</p>
                        <p className="text-xs text-green-600 mt-1">Redirecting to WhatsApp to complete your order...</p>
                    </div>
                </div>
            )}

            {/* Upload Button */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                    onClick={handleUpload}
                    disabled={selectedFiles.length === 0 || uploading}
                    className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-[#622AD1] to-[#7c4ddb] text-white px-6 py-4 rounded-xl font-semibold hover:from-[#F89816] hover:to-[#ffad3c] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {uploading ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Uploading...</span>
                        </>
                    ) : (
                        <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <span>Upload & Continue to Order</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default FileUpload;

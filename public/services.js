import pic_1 from '../public/pic_1.svg';
import pic_2 from '../public/pic_2.svg';
import pic_3 from '../public/pic_3.svg';
import pic_4 from '../public/pic_4.svg';
import pic_5 from '../public/pic_5.svg';
import pic_6 from '../public/pic_6.svg';
import pic_7 from '../public/pic_7.svg';
import pic_8 from '../public/pic_8.svg';
import pic_9 from '../public/pic_9.svg';
import pic_10 from '../public/pic_10.svg';

const servicesData = [
  {
    category: "Black & White Printing",
    icon: "🖨️",
    image: pic_1,
    services: [
      { name: "Notes Printing" },
      { name: "Assignments & Reports" },
      { name: "Text Documents" }
    ]
  },
  {
    category: "Color Printing",
    icon: "🌈",
    image: pic_2,
    services: [
      { name: "Presentations" },
      { name: "Charts & Diagrams" },
      { name: "Full Color Flyers" }
    ]
  },
  {
    category: "Certificate Printing",
    icon: "📜",
    image: pic_3,
    services: [
      { name: "Award Certificates" },
      { name: "Participation Certificates" },
      { name: "Formal Document Prints" }
    ]
  },
  {
    category: "Photo Printing",
    icon: "📷",
    image: pic_4,
    services: [
      { name: "A4 Size Photos" },
      { name: "A3 Size Photos" },
      { name: "Passport Size Prints" }
    ]
  },
  {
    category: "Business Printing",
    icon: "💼",
    image: pic_5,
    services: [
      { name: "Business Cards" },
      { name: "Letter Heads" },
      { name: "Invoices & Receipts" }
    ]
  },
  {
    category: "Book Printing",
    icon: "📚",
    image: pic_6,
    services: [
      { name: "Textbooks" },
      { name: "Novels" },
      { name: "Journals" }
    ]
  },
  {
    category: "Label & Sticker Printing",
    icon: "🏷️",
    image: pic_7,
    services: [
      { name: "Custom Labels" },
      { name: "Barcode Stickers" },
      { name: "Price Tags" }
    ]
  },
  {
    category: "Banner Printing",
    icon: "🎯",
    image: pic_8,
    services: [
      { name: "Small (24x48 inch)" },
      { name: "Roll-up (33x78 inch)" },
      { name: "Backdrop (24x63 inch)" }
    ]
  },
  {
    category: "Poster Printing",
    icon: "📰",
    image: pic_9,
    services: [
      { name: "A4 to A0 Posters" },
      { name: "Movie Posters" },
      { name: "Event Posters" }
    ]
  },
  {
    category: "Flyer Printing",
    icon: "📄",
    image: pic_10,
    services: [
      { name: "A6, A5, A4 Flyers" },
      { name: "DL & Square Flyers" },
      { name: "US Letter Size" }
    ]
  }
];

module.exports = servicesData;

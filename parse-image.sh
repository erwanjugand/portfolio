echo -n "Background Desktop : 0/4\r"
convert assets/images/background-original.jpg -gravity south -resize 1920x1080^ -extent 1920x1080 -quality 85 -brightness-contrast -5x0 public/images/background-desktop-x1.webp
echo -n 'Background Desktop : 1/4\r'
convert assets/images/background-original.jpg -gravity south -resize 1920x1080^ -extent 1920x1080 -quality 80 -brightness-contrast -5x0 public/images/background-desktop-x1.avif
echo -n 'Background Desktop : 2/4\r'
convert assets/images/background-original.jpg -gravity south -resize 3840x2160^ -extent 3840x2160 -quality 80 -brightness-contrast -5x0 public/images/background-desktop-x2.webp
echo -n 'Background Desktop : 3/4\r'
convert assets/images/background-original.jpg -gravity south -resize 3840x2160^ -extent 3840x2160 -quality 70 -brightness-contrast -5x0 public/images/background-desktop-x2.avif
echo -n 'Background Desktop : 4/4\n'

echo -n "Background Mobile : 0/4\r"
convert assets/images/background-original.jpg -gravity center -resize 768x1024^ -extent 768x1024 -quality 85 -brightness-contrast -5x0 public/images/background-mobile-x1.webp
echo -n "Background Mobile : 1/4\r"
convert assets/images/background-original.jpg -gravity center -resize 768x1024^ -extent 768x1024 -quality 80 -brightness-contrast -5x0 public/images/background-mobile-x1.avif
echo -n "Background Mobile : 2/4\r"
convert assets/images/background-original.jpg -gravity center -resize 1536x2048^ -extent 1536x2048 -quality 80 -brightness-contrast -5x0 public/images/background-mobile-x2.webp
echo -n "Background Mobile : 3/4\r"
convert assets/images/background-original.jpg -gravity center -resize 1536x2048^ -extent 1536x2048 -quality 70 -brightness-contrast -5x0 public/images/background-mobile-x2.avif
echo -n "Background Mobile : 4/4\n"

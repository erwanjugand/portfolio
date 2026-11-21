echo -n "Profile : 0/6\r"
convert app/assets/images/erwan-jugand-original.jpg -gravity center -resize 400x400^ -extent 400x400 -define webp:method=0 -quality 85 public/img/erwan-jugand-400.webp
echo -n "Profile : 1/6\r"
convert app/assets/images/erwan-jugand-original.jpg -gravity center -resize 400x400^ -extent 400x400 -quality 70 public/img/erwan-jugand-400.avif
echo -n "Profile : 2/6\r"
convert app/assets/images/erwan-jugand-original.jpg -gravity center -resize 800x800^ -extent 800x800 -define webp:method=0 -quality 80 public/img/erwan-jugand-800.webp
echo -n "Profile : 3/6\r"
convert app/assets/images/erwan-jugand-original.jpg -gravity center -resize 800x800^ -extent 800x800 -quality 65 public/img/erwan-jugand-800.avif
echo -n "Profile : 4/6\r"
convert app/assets/images/erwan-jugand-original.jpg -gravity center -resize 1200x1200^ -extent 1200x1200 -define webp:method=0 -quality 75 public/img/erwan-jugand-1200.webp
echo -n "Profile : 5/6\r"
convert app/assets/images/erwan-jugand-original.jpg -gravity center -resize 1200x1200^ -extent 1200x1200 -quality 60 public/img/erwan-jugand-1200.avif
echo -n "Profile : 6/6\n"

mkdir -p webp
for f in *.png; do
  magick "$f" -resize 240x -quality 80 "webp/${f%.png}.webp"
done
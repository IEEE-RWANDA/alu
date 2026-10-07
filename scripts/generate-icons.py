"""Generate the ALU monogram favicon with the site's Avenir typography.
Requires Pillow and the macOS Avenir Next font; committed outputs need no generator.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parent.parent
image = Image.new('RGBA', (512, 512), (0, 0, 0, 0))
draw = ImageDraw.Draw(image)
draw.rounded_rectangle((0, 0, 511, 511), radius=88, fill='#005e93')
font = ImageFont.truetype('/System/Library/Fonts/Avenir Next.ttc', 202, index=0)
bounds = draw.textbbox((0, 0), 'ALU', font=font)
x = (512 - (bounds[2] - bounds[0])) / 2 - bounds[0]
y = (512 - (bounds[3] - bounds[1])) / 2 - bounds[1]
draw.text((x, y), 'ALU', font=font, fill='white')
image.save(root / 'app/favicon.ico', sizes=[(16,16), (32,32), (48,48), (64,64)])
image.resize((64,64), Image.Resampling.LANCZOS).save(root / 'app/icon.png')
# Touch icons use an opaque square; iOS supplies the corner mask.
touch = Image.new('RGB', (512,512), '#005e93')
touch.paste(image, mask=image.getchannel('A'))
touch.resize((180,180), Image.Resampling.LANCZOS).save(root / 'app/apple-icon.png')
image.save(root / 'public/assets/alu-icon-preview.png')

# Apple touch icon
svgexport _favicon.svg apple-touch-icon.png 144:144

# Multisize favicon
svgexport _favicon.svg _favicon16.png 16:16
svgexport _favicon.svg _favicon32.png 32:32
svgexport _favicon.svg _favicon48.png 48:48
svgexport _favicon.svg _favicon64.png 64:64
convert _favicon*.png favicon.ico
rm _favicon*.png
# Shubbham-Moblie-shop
This is Moblie Shop which is provide all types Phones.

Note In tailwind V4 no need to create "tailwind.config.js" and "postcss-import"   

no need to import  number of file you use instend of one file is @import "tailwindcss";


Instead of a "tailwind.config.js" file, you can configure all of your customizations directly in the CSS(index.css) file where you import Tailwind, giving you one less file to worry about in your project:

eg. 

@theme {
  --color-primary-100: #ffc925;
  --color-primary-200: #ffb900;
  --color-secondary-100: #0b1a78;
  --color-secondary-200: #00b050;
}



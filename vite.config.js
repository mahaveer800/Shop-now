import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),        // spelling fix
        productDetails: resolve(__dirname, "productDetails.html"),
        contact: resolve(__dirname, "Contact.html"),
        cart: resolve(__dirname, "Cart.html"),
      },
    },
  },
});

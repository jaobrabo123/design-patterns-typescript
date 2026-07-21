import { ProductCustomizationDecorator } from "./product/product-customization-decorator";
import { ProductStampDecorator } from "./product/product-stamp-decorator";
import { TShirt } from "./product/t-shirt";

const tshirt = new TShirt();
const tshirWithStamp = new ProductStampDecorator(tshirt);
const customizedTshirt = new ProductCustomizationDecorator(tshirt);

console.log(tshirt.getPrice(), tshirt.getName());
console.log(tshirWithStamp.getPrice(), tshirWithStamp.getName());
console.log(customizedTshirt.getPrice(), customizedTshirt.getName());

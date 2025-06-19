import { createApp } from "vue";
import commonmixins from "./commonmixins";

const app = createApp();

app.mixin({
  mixins: [commonmixins],
});

import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.node /*, globalss: globals.node*/  }}, 
  pluginJs.configs.recommended,
];
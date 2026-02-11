/*
 * @Author: superRice
 * @Date: 2026-02-11 14:21:30
 * @LastEditors: superRice 1246333567@qq.com
 * @LastEditTime: 2026-02-11 15:02:36
 * @FilePath: /homePage/vite.config.ts
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2026 by superRice, All Rights Reserved.
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
});

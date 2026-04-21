import { browser } from "#imports";
import { defineExtensionStorage } from "@webext-core/storage";

export interface ExtensionStorageSchema {
  installDate: number;
  notificationsEnabled: boolean;
  favoriteUrls: string[];
}

export const extensionStorage = defineExtensionStorage<ExtensionStorageSchema>(
  browser.storage.local,
);

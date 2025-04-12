const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Configuration
const CONFIG = {
  backup: true,
  dryRun: false,
  verbose: true,
  appName: "ResqApp",
};

// Structure complète de ResqApp
const TARGET_STRUCTURE = {
  app: {
    "(auth)": {
      "login.tsx": null,
      "register.tsx": null,
      "verify.tsx": null,
      "_layout.tsx": null,
    },
    "(parent)": {
      "dashboard.tsx": null,
      "children-map.tsx": null,
      "settings.tsx": null,
      "contacts.tsx": null,
      "_layout.tsx": null,
    },
    "(child)": {
      "dashboard.tsx": null,
      "emergency.tsx": null,
      "settings.tsx": null,
      "_layout.tsx": null,
    },
    profile: {
      "index.tsx": null,
      "edit.tsx": null,
      "[id].tsx": null,
    },
    messages: {
      "index.tsx": null,
      "[id].tsx": null,
    },
    notifications: {
      "index.tsx": null,
    },
    components: {
      common: {
        "Button.tsx": null,
        "Input.tsx": null,
        "Card.tsx": null,
      },
      maps: {
        "Map.tsx": null,
        "SafeZone.tsx": null,
        "LocationMarker.tsx": null,
      },
      alerts: {
        "SosButton.tsx": null,
        "AlertModal.tsx": null,
      },
      profile: {
        "Avatar.tsx": null,
        "ContactCard.tsx": null,
      },
    },
    contexts: {
      "AuthContext.tsx": null,
      "LocationContext.tsx": null,
      "AlertContext.tsx": null,
    },
    hooks: {
      "useLocation.ts": null,
      "useAuth.ts": null,
      "useAlerts.ts": null,
    },
    services: {
      location: {
        "locationService.ts": null,
        "geofencing.ts": null,
      },
      auth: {
        "authService.ts": null,
        "userService.ts": null,
      },
      notifications: {
        "notificationService.ts": null,
        "alertService.ts": null,
      },
      storage: {
        "secureStorage.ts": null,
        "fileStorage.ts": null,
      },
    },
    utils: {
      "permissions.ts": null,
      "validators.ts": null,
      "datetime.ts": null,
      "security.ts": null,
    },
    types: {
      "user.types.ts": null,
      "location.types.ts": null,
      "alert.types.ts": null,
    },
    config: {
      "firebase.ts": null,
      "theme.ts": null,
      "constants.ts": null,
    },
    store: {
      slices: {
        "authSlice.ts": null,
        "locationSlice.ts": null,
        "alertSlice.ts": null,
      },
      "store.ts": null,
      "hooks.ts": null,
    },
    "_layout.tsx": null,
    "index.tsx": null,
  },
  assets: {
    "icon.png": null,
    "splash.png": null,
    "notification-icon.png": null,
  },
  "app.json": null,
  "babel.config.js": null,
  "tsconfig.json": null,
  "package.json": null,
};

class StructureManager {
  constructor() {
    this.backupPath = path.join(process.cwd(), `${CONFIG.appName}-backup`);
    this.appPath = path.join(process.cwd(), CONFIG.appName);
  }

  log(message) {
    if (CONFIG.verbose) console.log(message);
  }

  createBackup() {
    if (!CONFIG.backup || !fs.existsSync(this.appPath)) return;

    try {
      if (!fs.existsSync(this.backupPath)) {
        fs.mkdirSync(this.backupPath);
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const backupFolder = path.join(this.backupPath, timestamp);

      this.log(`\nCréation de la sauvegarde dans ${backupFolder}...`);
      fs.mkdirSync(backupFolder);

      execSync(`cp -r "${this.appPath}" "${backupFolder}"`);
      this.log("✓ Sauvegarde terminée\n");
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error.message);
    }
  }

  ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
      if (!CONFIG.dryRun) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      this.log(`📁 Dossier créé: ${dirPath}`);
      return true;
    }
    return false;
  }

  createFile(filePath) {
    if (!fs.existsSync(filePath)) {
      if (!CONFIG.dryRun) {
        fs.writeFileSync(filePath, "");
      }
      this.log(`📄 Fichier créé: ${filePath}`);
      return true;
    }
    return false;
  }

  processStructure(basePath, structure) {
    for (const [name, content] of Object.entries(structure)) {
      const currentPath = path.join(basePath, name);

      if (typeof content === "object" && content !== null) {
        this.ensureDirectoryExists(currentPath);
        this.processStructure(currentPath, content);
      } else {
        this.createFile(currentPath);
      }
    }
  }

  initializeProject() {
    console.log(`\n=== ${CONFIG.appName} Structure Manager ===`);
    console.log(`Mode dry run: ${CONFIG.dryRun ? "ACTIF" : "INACTIF"}`);
    console.log(`Backups: ${CONFIG.backup ? "ACTIFS" : "INACTIFS"}\n`);

    // Phase 1: Sauvegarde
    if (CONFIG.backup && fs.existsSync(this.appPath)) {
      this.createBackup();
    }

    // Phase 2: Création de la structure
    this.log("\nCréation de la structure...");
    this.processStructure(process.cwd(), {
      [CONFIG.appName]: TARGET_STRUCTURE,
    });

    // Fin
    console.log("\nOpération terminée avec succès!");
    if (CONFIG.dryRun) {
      console.log(
        "\nNOTE: Mode dry run activé - aucune modification réelle effectuée"
      );
    }
  }
}

// Exécution
const manager = new StructureManager();
manager.initializeProject();

import { discoverEmberDataModels } from 'ember-cli-mirage';
import { createServer } from 'miragejs';

export default function (config) {
  const finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels(), ...config.models },
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  this.namespace = 'api';

  this.get('/downloads', () => {
    return {
      downloads: [
        {
          id: 1,
          name: 'smss.exe',
          device: 'Stark',
          path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
          status: 'scheduled',
        },

        {
          id: 2,
          name: 'netsh.exe',
          device: 'Targaryen',
          path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
          status: 'available',
        },

        {
          id: 3,
          name: 'uxtheme.dll',
          device: 'Lannister',
          path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
          status: 'available',
        },

        {
          id: 4,
          name: 'cryptbase.dll',
          device: 'Martell',
          path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
          status: 'scheduled',
        },

        {
          id: 5,
          name: '7za.exe',
          device: 'Baratheon',
          path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
          status: 'scheduled',
        },
      ],
    };
  });
}

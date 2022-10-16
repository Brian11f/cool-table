import Model, { attr } from '@ember-data/model';

export default class DownloadModel extends Model {
  @attr name;
  @attr device;
  @attr path;
  @attr status;
}

// Example Data
// {
//   name: 'smss.exe',
//   device: 'Stark',
//   path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
//   status: 'scheduled',
// },

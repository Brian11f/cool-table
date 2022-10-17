import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HomeController extends Controller {
  @tracked selectedDownloads = [];
  @tracked allIdAreChecked = false;
  @tracked indeterminateState = false;

  get isIndeterminate() {
    return (
      this.selectedDownloads.length >= 1 &&
      this.selectedDownloads.length < this.availableDownloadIds.length
    );
  }

  get availableDownloadIds() {
    return this.model
      .filter((download) => download.status === 'available')
      .map((download) => download.id);
  }

  @action
  selectAll() {
    if (this.selectedDownloads.length === this.availableDownloadIds.length) {
      this.selectedDownloads = [];
      this.allIdAreChecked = false;
    } else {
      this.selectedDownloads = this.availableDownloadIds;
      this.allIdAreChecked = true;
    }
  }

  @action
  select(download) {
    if (this.selectedDownloads.includes(download.id)) {
      this.selectedDownloads = this.selectedDownloads.filter((id) => id !== download.id);
    } else {
      this.selectedDownloads.push(download.id);
    }

    if (this.availableDownloadIds.length === this.selectedDownloads.length) {
      this.allIdAreChecked = true;
    } else {
      this.allIdAreChecked = false;
    }

    if (this.isIndeterminate) {
      this.indeterminateState = true;
    } else {
      this.indeterminateState = false;
    }
  }

  @action
  startDownload() {
    let alertMessage = 'Please select a file to download.';

    if (this.selectedDownloads.length >= 1) {
      const selectedModels = this.model.filter((download) =>
        this.selectedDownloads.includes(download.id)
      );

      alertMessage = `${selectedModels
        .map(function (download) {
          return `${download.device}: ${download.path}\n`;
        })
        .join('')}`;
    }

    alert(alertMessage);
  }
}

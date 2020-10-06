export class ImageHelper {

  constructor() { }

  public handleImgBrokenLink(event: any, alternativeUrl: string = null, alternativeFile: string = null) {

    // if no alternative path is provided, set a default one
    if (!alternativeUrl) {
      alternativeUrl = '/assets/img/';
    }

    // if no alternative image is provided, set a default one
    if (!alternativeFile) {
      alternativeFile = 'image-not-found.jpg';
    }

    // try to load file locally (if image url is not already pointing to a local path)
    if (event.target.src && event.target.src.indexOf(alternativeUrl) < 0) {
      alternativeFile = this.getFileName(event.target.src);
    }

    const url = alternativeUrl + alternativeFile;
    if (event.target.src.indexOf(url) < 0) {
      event.target.src = url;
    }
  }

  private getFileName(path: any): string {
    let result: string;

    if (path && path.length > 0) {
      const parts = path.split('/');
      result = parts[parts.length - 1];
    }

    return result;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  transform(sizeInBytes: number, longForm: boolean): string {
    const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const FILE_SIZE_UNITS_LONG = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];

    const units = longForm
        ? FILE_SIZE_UNITS_LONG
        : FILE_SIZE_UNITS;
    let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
    power = Math.min(power, units.length - 1);
    const size = sizeInBytes / Math.pow(1024, power);
    const formattedSize = Math.round(size * 100) / 100;
    const unit = units[power];
    return `${formattedSize} ${unit}`;
  }

}

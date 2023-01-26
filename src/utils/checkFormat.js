const isImage = ['gif', 'jpg', 'jpeg', 'png', 'webp'];
const isVideo = ['mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'mp4'];

export const checkFormat = (file) => {
  const lastIndex = file.lastIndexOf('.');
  const fileFormat = file.slice(lastIndex + 1);

  return isImage?.includes(fileFormat);
};

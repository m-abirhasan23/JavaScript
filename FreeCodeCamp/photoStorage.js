function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {

 const totalStorageMb=hardDriveSizeGb*1000

 const totalPhotoStore=Math.floor(totalStorageMb/photoSizeMb)

 return totalPhotoStore
}
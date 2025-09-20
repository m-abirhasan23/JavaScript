'use strict'

function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
    if (fileUnit==="B") {
    driveSizeGb=(driveSizeGb*1000000)*1000
    }
        else if (fileUnit==="KB"){
            driveSizeGb=(driveSizeGb*1000)*1000
        }
        else if (fileUnit==="MB") {
            driveSizeGb=driveSizeGb*1000
            
        }


  const totalNumberOfFile=Math.floor(driveSizeGb/fileSize)


  return totalNumberOfFile
  


  
}



const value =numberOfFiles(5, "MB", 1)
console.log(value);

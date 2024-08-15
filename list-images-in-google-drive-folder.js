function doGet() {
  var folderId = '<replace_with_your_folder_id>';
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFilesByType(MimeType.JPEG);

  var output = HtmlService.createHtmlOutput();
  output.append('<ul>');

  while (files.hasNext()) {
    var file = files.next();
    var thumbnailUrl =  `https://drive.google.com/thumbnail?id=${file.getId()}&sz=w100`;
    var downloadUrl = file.getDownloadUrl();

    output.append('<li>');
    output.append('<img src="' + thumbnailUrl + '" alt="' + file.getName() + '">');
    output.append('<a href="' + downloadUrl + '">' + file.getName() + '</a>');
    output.append('</li>');
  }

  output.append('</ul>');
  return output;
}

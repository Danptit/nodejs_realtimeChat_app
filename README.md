<html xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:w="urn:schemas-microsoft-com:office:word"
xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
xmlns="http://www.w3.org/TR/REC-html40">
# nodejs_realtimeChat_app

Xây dựng ứng dụng chat realtime bằng nodejs
 
Demo ứng dụng tại đây: https://realtime-chatting.herokuapp.com/
SourceCode: https://github.com/Danptit/nodejs_realtimeChat_app

Cài đặt môi trường phát triển
Khởi tạo ứng dụng bằng cách tạo 1 thư mục , cd vào thư mục đó và tạo file package.json bằng cú pháp: npm init.
Tiếp theo chúng ta cài đặt các modules cần thiết cho ứng dụng chat:
npm install -- save express
npm install -- save socket.io

Tạo 2 file: 
server.js để xử lí lắng nghe, emit các sự kiện trao đổi giữa server và client 
index.html  giao diện trang web và xử lí các hàm lắng nghe, emit tới server trong thẻ <script>



Cấu trúc thư mục của chúng ta sẽ có dạng như sau :
 

Server.js:
 
Đầu tiên, chúng ta require các module cần dùng: express, socket.io và tạo 1 biến app để sử dụng express
Dòng 6: Chạy 1 server lắng nghe tại địa chỉ : http://localhost:8888/
Dòng 9: Request gửi tới root url  sẽ được response về 1 giao diện index.html
 
Dòng 13: Khai báo 1 biến io để có thể sử dụng các hàm của socket.io library
Dòng 14, 15 tạo 2 mảng để lưu trữ tên users chứa tên của user khi connect tới server và mảng connections lưu trữ các connect sau này. 
Index.html:
Tại file index.html, ta cần phải cài đặt socket.io lên client cái mà sẽ connect tới server, để làm điều đó chúng ta thêm 1 library socket.io bằng 1 thẻ <script> viết trong thẻ

<head>
<meta http-equiv=Content-Type content="text/html; charset=unicode">
<meta name=ProgId content=Word.Document>
<meta name=Generator content="Microsoft Word 15">
<meta name=Originator content="Microsoft Word 15">
<link rel=File-List href="README_files/filelist.xml">
<link rel=Edit-Time-Data href="README_files/editdata.mso">
<!--[if !mso]>
<style>
v\:* {behavior:url(#default#VML);}
o\:* {behavior:url(#default#VML);}
w\:* {behavior:url(#default#VML);}
.shape {behavior:url(#default#VML);}
</style>
<![endif]--><!--[if gte mso 9]><xml>
 <o:DocumentProperties>
  <o:Author>Thangnv PTIT</o:Author>
  <o:LastAuthor>Thangnv PTIT</o:LastAuthor>
  <o:Revision>2</o:Revision>
  <o:TotalTime>0</o:TotalTime>
  <o:Created>2018-09-18T09:17:00Z</o:Created>
  <o:LastSaved>2018-09-18T09:17:00Z</o:LastSaved>
  <o:Pages>10</o:Pages>
  <o:Words>675</o:Words>
  <o:Characters>3853</o:Characters>
  <o:Lines>32</o:Lines>
  <o:Paragraphs>9</o:Paragraphs>
  <o:CharactersWithSpaces>4519</o:CharactersWithSpaces>
  <o:Version>16.00</o:Version>
 </o:DocumentProperties>
 <o:OfficeDocumentSettings>
  <o:AllowPNG/>
 </o:OfficeDocumentSettings>
</xml><![endif]-->
<link rel=themeData href="README_files/themedata.thmx">
<link rel=colorSchemeMapping href="README_files/colorschememapping.xml">
<!--[if gte mso 9]><xml>
 <w:WordDocument>
  <w:View>Print</w:View>
  <w:TrackMoves>false</w:TrackMoves>
  <w:TrackFormatting/>
  <w:ValidateAgainstSchemas/>
  <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
  <w:IgnoreMixedContent>false</w:IgnoreMixedContent>
  <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
  <w:DoNotPromoteQF/>
  <w:LidThemeOther>EN-US</w:LidThemeOther>
  <w:LidThemeAsian>X-NONE</w:LidThemeAsian>
  <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>
  <w:Compatibility>
   <w:BreakWrappedTables/>
   <w:SplitPgBreakAndParaMark/>
   <w:UseFELayout/>
  </w:Compatibility>
  <m:mathPr>
   <m:mathFont m:val="Cambria Math"/>
   <m:brkBin m:val="before"/>
   <m:brkBinSub m:val="&#45;-"/>
   <m:smallFrac m:val="off"/>
   <m:dispDef/>
   <m:lMargin m:val="0"/>
   <m:rMargin m:val="0"/>
   <m:defJc m:val="centerGroup"/>
   <m:wrapIndent m:val="1440"/>
   <m:intLim m:val="subSup"/>
   <m:naryLim m:val="undOvr"/>
  </m:mathPr></w:WordDocument>
</xml><![endif]--><!--[if gte mso 9]><xml>
 <w:LatentStyles DefLockedState="false" DefUnhideWhenUsed="false"
  DefSemiHidden="false" DefQFormat="false" DefPriority="99"
  LatentStyleCount="371">
  <w:LsdException Locked="false" Priority="0" QFormat="true" Name="Normal"/>
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 1"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 2"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 3"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 4"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 5"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 6"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 7"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 8"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 9"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 9"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 1"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 2"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 3"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 4"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 5"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 6"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 7"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 8"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 9"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footnote text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="header"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footer"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index heading"/>
  <w:LsdException Locked="false" Priority="35" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="caption"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="table of figures"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="envelope address"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="envelope return"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footnote reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="line number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="page number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="endnote reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="endnote text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="table of authorities"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="macro"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="toa heading"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 5"/>
  <w:LsdException Locked="false" Priority="10" QFormat="true" Name="Title"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Closing"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Signature"/>
  <w:LsdException Locked="false" Priority="1" SemiHidden="true"
   UnhideWhenUsed="true" Name="Default Paragraph Font"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Message Header"/>
  <w:LsdException Locked="false" Priority="11" QFormat="true" Name="Subtitle"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Salutation"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Date"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text First Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text First Indent 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Note Heading"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Block Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Hyperlink"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="FollowedHyperlink"/>
  <w:LsdException Locked="false" Priority="22" QFormat="true" Name="Strong"/>
  <w:LsdException Locked="false" Priority="20" QFormat="true" Name="Emphasis"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Document Map"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Plain Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="E-mail Signature"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Top of Form"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Bottom of Form"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal (Web)"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Acronym"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Address"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Cite"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Code"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Definition"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Keyboard"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Preformatted"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Sample"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Typewriter"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Variable"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal Table"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation subject"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="No List"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Contemporary"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Elegant"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Professional"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Subtle 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Subtle 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Balloon Text"/>
  <w:LsdException Locked="false" Priority="39" Name="Table Grid"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Theme"/>
  <w:LsdException Locked="false" SemiHidden="true" Name="Placeholder Text"/>
  <w:LsdException Locked="false" Priority="1" QFormat="true" Name="No Spacing"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 1"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 1"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 1"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 1"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 1"/>
  <w:LsdException Locked="false" SemiHidden="true" Name="Revision"/>
  <w:LsdException Locked="false" Priority="34" QFormat="true"
   Name="List Paragraph"/>
  <w:LsdException Locked="false" Priority="29" QFormat="true" Name="Quote"/>
  <w:LsdException Locked="false" Priority="30" QFormat="true"
   Name="Intense Quote"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 1"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 1"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 1"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 1"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 1"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 2"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 2"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 2"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 2"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 2"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 2"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 2"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 3"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 3"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 3"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 3"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 3"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 3"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 3"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 4"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 4"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 4"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 4"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 4"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 4"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 4"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 5"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 5"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 5"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 5"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 5"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 5"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 5"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 6"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 6"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 6"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 6"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 6"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 6"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 6"/>
  <w:LsdException Locked="false" Priority="19" QFormat="true"
   Name="Subtle Emphasis"/>
  <w:LsdException Locked="false" Priority="21" QFormat="true"
   Name="Intense Emphasis"/>
  <w:LsdException Locked="false" Priority="31" QFormat="true"
   Name="Subtle Reference"/>
  <w:LsdException Locked="false" Priority="32" QFormat="true"
   Name="Intense Reference"/>
  <w:LsdException Locked="false" Priority="33" QFormat="true" Name="Book Title"/>
  <w:LsdException Locked="false" Priority="37" SemiHidden="true"
   UnhideWhenUsed="true" Name="Bibliography"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="TOC Heading"/>
  <w:LsdException Locked="false" Priority="41" Name="Plain Table 1"/>
  <w:LsdException Locked="false" Priority="42" Name="Plain Table 2"/>
  <w:LsdException Locked="false" Priority="43" Name="Plain Table 3"/>
  <w:LsdException Locked="false" Priority="44" Name="Plain Table 4"/>
  <w:LsdException Locked="false" Priority="45" Name="Plain Table 5"/>
  <w:LsdException Locked="false" Priority="40" Name="Grid Table Light"/>
  <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark"/>
  <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful"/>
  <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 1"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 1"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 1"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 2"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 2"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 2"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 3"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 3"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 3"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 4"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 4"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 4"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 5"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 5"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 5"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 6"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 6"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 6"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark"/>
  <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful"/>
  <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 1"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 1"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 1"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 2"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 2"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 2"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 3"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 3"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 3"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 4"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 4"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 4"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 5"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 5"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 5"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 6"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 6"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 6"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 6"/>
 </w:LatentStyles>
</xml><![endif]-->
<style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;
	mso-font-charset:0;
	mso-generic-font-family:roman;
	mso-font-pitch:variable;
	mso-font-signature:-536869121 1107305727 33554432 0 415 0;}
@font-face
	{font-family:"Yu Mincho";
	panose-1:2 2 4 0 0 0 0 0 0 0;
	mso-font-alt:游明朝;
	mso-font-charset:128;
	mso-generic-font-family:roman;
	mso-font-pitch:variable;
	mso-font-signature:-2147482905 717749503 18 0 131231 0;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;
	mso-font-charset:0;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-536859905 -1073732485 9 0 511 0;}
@font-face
	{font-family:"\@Yu Mincho";
	mso-font-charset:128;
	mso-generic-font-family:roman;
	mso-font-pitch:variable;
	mso-font-signature:-2147482905 717749503 18 0 131231 0;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-parent:"";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:107%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:"Yu Mincho";
	mso-fareast-theme-font:minor-fareast;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;}
a:link, span.MsoHyperlink
	{mso-style-priority:99;
	color:#0563C1;
	mso-themecolor:hyperlink;
	text-decoration:underline;
	text-underline:single;}
a:visited, span.MsoHyperlinkFollowed
	{mso-style-noshow:yes;
	mso-style-priority:99;
	color:#954F72;
	mso-themecolor:followedhyperlink;
	text-decoration:underline;
	text-underline:single;}
.MsoChpDefault
	{mso-style-type:export-only;
	mso-default-props:yes;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:"Yu Mincho";
	mso-fareast-theme-font:minor-fareast;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;}
.MsoPapDefault
	{mso-style-type:export-only;
	margin-bottom:8.0pt;
	line-height:107%;}
@page WordSection1
	{size:8.5in 11.0in;
	margin:1.0in 1.0in 1.0in 1.0in;
	mso-header-margin:.5in;
	mso-footer-margin:.5in;
	mso-paper-source:0;}
div.WordSection1
	{page:WordSection1;}
-->
</style>
<!--[if gte mso 10]>
<style>
 /* Style Definitions */
 table.MsoNormalTable
	{mso-style-name:"Table Normal";
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-noshow:yes;
	mso-style-priority:99;
	mso-style-parent:"";
	mso-padding-alt:0in 5.4pt 0in 5.4pt;
	mso-para-margin-top:0in;
	mso-para-margin-right:0in;
	mso-para-margin-bottom:8.0pt;
	mso-para-margin-left:0in;
	line-height:107%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;}
</style>
<![endif]-->
<script>
 ngay trước khi đóng thẻ </body>  và viết viết các đoạn mã xử lí tại client trong đó:
 
Như vậy tại client chúng ta đã tạo 1 socket và có thể kết nối tới server
Gửi và nhận data
Server và client trao đổi dữ liệu với nhau thông qua các events, chúng ta có thể gửi đi và lắng nghe các events đó bằng cú pháp socket.emit và socket.on

Server.js:
 
Dòng 20 sẽ lắng nghe các socket kết nối tới server.
Khi các socket kết nối tới server, chúng ta sẽ lưu nó vào mảng connections và dòng 22 sẽ log ra số socket đang kết nối

Index.html:
 
 
Khi 1 client truy cập vào địa chỉ : http://localhost:8888/, giao diện hiện ra yêu cầu user nhập nickname vào form và sau đó ấn enter.
Sau khi user nhập nickname, dòng 89 hoặc 91 sẽ gửi 1 emit : new-user  lên server với data là tên user nhập vào 




Server.js
 

Tại server, chúng ta sẽ xử lí emit : “new -user”  đặt tên cho socket kết nối tới bằng data nhận được từ client, lưu nó vào mảng users, sau đó gọi làm updateUsernames() 
 
Hàm updateUsernames() sẽ gửi tới tất cả client 1 emit : get user, kèm data là mảng users, client sẽ nhận emit này và cập nhật lại list các user online.
 
Dòng 30  thực hiện việc emit : “join –room ’ cho tất cả client ngoại trừ socket hiện thời, để thông báo cho các user khác là có người đã tham gia phòng chat

Index.html
 
Client lắng nghe emit “get user” từ server với data nhận được là mảng users, ta sẽ tạo các thẻ <li> tương ứng độ dài mảng users 

 
 
Phía khi nhận được emit joint-room từ server, chúng ta sẽ tạo 1 thẻ <p>  + data để hiển thị thông báo có người tham gia cuộc trò chuyện
 
Tiếp theo chúng ta sẽ xử lí hiệu ứng khi ai đó đang nhập tin nhắn thì thông báo cho các client còn lại
 

 
Dòng 113 chúng ra lắng nghe user gõ phím, ngoại trừ phím enter(keycode = 13), ta sẽ bắn 1 emit tới server, server lắng nghe emit này, và gửi về emit : someone typing kèm data là tên của socket đang nhập văn bản, phía client lắng nghe emit này, gán text vào thẻ <p> có id = status với data là tên username của socket đang nhập văn bản

Xử lí khi socket ngắt kết nối tới server
Server.js
 
Dòng 51 sẽ lắng nghe khi 1 user nào đó ngừng kết nối tới server, chúng ta thực hiện:
Dòng 54: Thông báo cho các user khác 1 user tên socket.username đã rời khỏi nhóm chat bằng 1 emit : user-left
 Dòng 55: Xóa user đó trong mảng user,
 Dòng 56: Cập nhập lại list user online cho client,
 Dòng 58: Xóa socket đó trong mảng connections

Xử lí nhắn tin giữa các socket
Index.html:
 
Khi user nhập nội dung tin nhắn, chúng ta sẽ bắn 1 emit với nội dung send-message kèm data là giá trị của ô input, sau đó set text cho ô input bằng đoạn string rỗng
Server.js
 
Tại server sẽ lắng nghe emit: send-message từ client gửi lên, sau đó emit lại cho client 2 emit để client có thể hiển thị giao diện tin nhắn đúng như mình muốn
Index.html
 
Tại client chúng ta nhận được 2 emit từ server, 2 emit này chỉ khác nhau phần giao diện hiển thị, tin nhắn của chính user đó thì chúng ta thêm style margin-left 50% để dịch sang bên trái
 
</script>
<!--[if gte mso 9]><xml>
 <o:shapedefaults v:ext="edit" spidmax="1026"/>
</xml><![endif]--><!--[if gte mso 9]><xml>
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="1"/>
 </o:shapelayout></xml><![endif]-->
</head>

<body lang=EN-US link="#0563C1" vlink="#954F72" style='tab-interval:.5in'>

<div class=WordSection1>

<p class=MsoNormal align=center style='text-align:center'><b style='mso-bidi-font-weight:
normal'><span style='font-size:22.0pt;line-height:107%'>Xây dựng ứng dụng chat
realtime bằng nodejs<o:p></o:p></span></b></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shapetype
 id="_x0000_t75" coordsize="21600,21600" o:spt="75" o:preferrelative="t"
 path="m@4@5l@4@11@9@11@9@5xe" filled="f" stroked="f">
 <v:stroke joinstyle="miter"/>
 <v:formulas>
  <v:f eqn="if lineDrawn pixelLineWidth 0"/>
  <v:f eqn="sum @0 1 0"/>
  <v:f eqn="sum 0 0 @1"/>
  <v:f eqn="prod @2 1 2"/>
  <v:f eqn="prod @3 21600 pixelWidth"/>
  <v:f eqn="prod @3 21600 pixelHeight"/>
  <v:f eqn="sum @0 0 1"/>
  <v:f eqn="prod @6 1 2"/>
  <v:f eqn="prod @7 21600 pixelWidth"/>
  <v:f eqn="sum @8 21600 0"/>
  <v:f eqn="prod @7 21600 pixelHeight"/>
  <v:f eqn="sum @10 21600 0"/>
 </v:formulas>
 <v:path o:extrusionok="f" gradientshapeok="t" o:connecttype="rect"/>
 <o:lock v:ext="edit" aspectratio="t"/>
</v:shapetype><v:shape id="Picture_x0020_5" o:spid="_x0000_i1046" type="#_x0000_t75"
 style='width:468pt;height:225.75pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image001.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img width=624 height=301
src="README_files/image002.jpg" v:shapes="Picture_x0020_5"><![endif]></span><b
style='mso-bidi-font-weight:normal'><span style='font-size:18.0pt;line-height:
107%'><o:p></o:p></span></b></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%'>Demo ứng dụng tại đây: </span></b><a
href="https://realtime-chatting.herokuapp.com/"><b style='mso-bidi-font-weight:
normal'><span style='font-size:13.0pt;line-height:107%'>https://realtime-chatting.herokuapp.com/</span></b></a><b
style='mso-bidi-font-weight:normal'><span style='font-size:13.0pt;line-height:
107%'><o:p></o:p></span></b></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%'>SourceCode: </span></b><a
href="https://github.com/Danptit/nodejs_realtimeChat_app"><b style='mso-bidi-font-weight:
normal'><span style='font-size:13.0pt;line-height:107%'>https://github.com/Danptit/nodejs_realtimeChat_app</span></b></a><b
style='mso-bidi-font-weight:normal'><span style='font-size:13.0pt;line-height:
107%'><o:p></o:p></span></b></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></b></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:18.0pt;line-height:107%'>Cài đặt môi trường phát triển<o:p></o:p></span></b></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%;color:black;
background:white'>Khởi tạo ứng dụng bằng cách tạo 1 thư mục , cd vào thư mục đó
và tạo file package.json bằng cú pháp: <b style='mso-bidi-font-weight:normal'>npm
init.<o:p></o:p></b></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%;color:black;
background:white'>Tiếp theo chúng ta cài đặt các modules cần thiết cho ứng dụng
chat:<o:p></o:p></span></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%;mso-fareast-font-family:"Times New Roman";
mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'>npm install --
save express</span></b><span style='font-size:13.0pt;line-height:107%;
mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;color:black;
background:white'><o:p></o:p></span></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%;mso-fareast-font-family:"Times New Roman";
mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin'>npm install --
save socket.io</span></b><span style='font-size:13.0pt;line-height:107%;
mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;color:black;
background:white'><o:p></o:p></span></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:18.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></b></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:18.0pt;line-height:107%'>Tạo 2 file: <o:p></o:p></span></b></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%'>server.js </span></b><span
style='font-size:13.0pt;line-height:107%'>để xử lí lắng nghe, emit các sự kiện
trao đổi giữa server và client <b style='mso-bidi-font-weight:normal'><o:p></o:p></b></span></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%'>index.html </span></b><span
style='font-size:13.0pt;line-height:107%'><span
style='mso-spacerun:yes'> </span>giao diện trang web và xử lí các hàm lắng
nghe, emit tới server trong thẻ &lt;script&gt;<o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:18.0pt;line-height:107%'>Cấu trúc thư mục của chúng ta sẽ có dạng
như sau :<o:p></o:p></span></b></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_8" o:spid="_x0000_i1045" type="#_x0000_t75" style='width:162.75pt;
 height:138pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image003.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=217 height=184
src="README_files/image003.png" v:shapes="Picture_x0020_8"><![endif]></span><b
style='mso-bidi-font-weight:normal'><span style='font-size:18.0pt;line-height:
107%'><o:p></o:p></span></b></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:18.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></b></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%;mso-no-proof:yes'>Server.js:<o:p></o:p></span></b></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_1" o:spid="_x0000_i1044" type="#_x0000_t75" style='width:468pt;
 height:132pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image004.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=176
src="README_files/image005.jpg" v:shapes="Picture_x0020_1"><![endif]></span><span
style='font-size:13.0pt;line-height:107%'><o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Đầu tiên,
chúng ta require các module cần dùng: express, socket.io và tạo 1 biến app để sử
dụng express<o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Dòng 6: Chạy
1 server lắng nghe tại địa chỉ : http://localhost:8888/<o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Dòng 9:
Request gửi tới root url <span style='mso-spacerun:yes'> </span>sẽ được
response về 1 giao diện index.html<o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%;mso-no-proof:
yes'><!--[if gte vml 1]><v:shape id="Picture_x0020_2" o:spid="_x0000_i1043"
 type="#_x0000_t75" style='width:468pt;height:126pt;visibility:visible;
 mso-wrap-style:square'>
 <v:imagedata src="README_files/image006.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=168
src="README_files/image007.jpg" v:shapes="Picture_x0020_2"><![endif]></span><span
style='font-size:13.0pt;line-height:107%'><o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Dòng 13:
Khai báo 1 biến io để có thể sử dụng các hàm của socket.io library<o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Dòng 14, 15
tạo 2 mảng để lưu trữ tên users chứa tên của user khi connect tới server và mảng
connections lưu trữ các connect sau này. <o:p></o:p></span></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%'>Index.html:<o:p></o:p></span></b></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Tại file
index.html, ta cần phải cài đặt socket.io lên client cái mà sẽ connect tới
server, để làm điều đó chúng ta thêm 1 library socket.io bằng 1 thẻ
&lt;script&gt; viết trong thẻ &lt;head&gt;<o:p></o:p></span></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_10" o:spid="_x0000_i1042" type="#_x0000_t75" style='width:468pt;
 height:27.75pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image008.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=37
src="README_files/image009.jpg" v:shapes="Picture_x0020_10"><![endif]></span><span
style='font-size:13.0pt;line-height:107%'><o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%'><span
style='mso-spacerun:yes'> </span></span></b><span style='font-size:13.0pt;
line-height:107%'>Ta tạo thêm thẻ &lt;script&gt; ngay trước khi đóng thẻ
&lt;/body&gt;<span style='mso-spacerun:yes'>  </span>và viết viết các đoạn mã xử
lí tại client trong đó:<o:p></o:p></span></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_13" o:spid="_x0000_i1041" type="#_x0000_t75" style='width:468pt;
 height:93.75pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image010.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=125
src="README_files/image011.jpg" v:shapes="Picture_x0020_13"><![endif]></span><span
style='font-size:13.0pt;line-height:107%'><o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Như vậy tại
client chúng ta đã tạo 1 socket và có thể kết nối tới server<o:p></o:p></span></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:18.0pt;line-height:107%'>Gửi và nhận data<o:p></o:p></span></b></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Server và
client trao đổi dữ liệu với nhau thông qua các events, chúng ta có thể gửi đi
và lắng nghe các events đó bằng cú pháp <b style='mso-bidi-font-weight:normal'>socket.emit</b>
và <b style='mso-bidi-font-weight:normal'>socket.on<o:p></o:p></b></span></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></b></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%'>Server.js:<o:p></o:p></span></b></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_15" o:spid="_x0000_i1040" type="#_x0000_t75" style='width:468pt;
 height:153pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image012.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=204
src="README_files/image013.jpg" v:shapes="Picture_x0020_15"><![endif]></span><b
style='mso-bidi-font-weight:normal'><span style='font-size:13.0pt;line-height:
107%'><o:p></o:p></span></b></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Dòng 20 sẽ lắng
nghe các socket kết nối tới server.<o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Khi các socket
kết nối tới server, chúng ta sẽ lưu nó vào mảng connections và dòng 22 sẽ log
ra số socket đang kết nối<o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%'>Index.html:<o:p></o:p></span></b></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_17" o:spid="_x0000_i1039" type="#_x0000_t75" style='width:468pt;
 height:140.25pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image014.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=187
src="README_files/image015.jpg" v:shapes="Picture_x0020_17"><![endif]></span><b
style='mso-bidi-font-weight:normal'><span style='font-size:13.0pt;line-height:
107%'><o:p></o:p></span></b></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_16" o:spid="_x0000_i1038" type="#_x0000_t75" style='width:439.5pt;
 height:177.75pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image016.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=586 height=237
src="README_files/image017.jpg" v:shapes="Picture_x0020_16"><![endif]></span><b
style='mso-bidi-font-weight:normal'><span style='font-size:13.0pt;line-height:
107%'><o:p></o:p></span></b></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Khi 1 client
truy cập vào địa chỉ : </span><a href="http://localhost:8888/"><span
style='font-size:13.0pt;line-height:107%'>http://localhost:8888/</span></a><span
style='font-size:13.0pt;line-height:107%'>, giao diện hiện ra yêu cầu user nhập
nickname vào form và sau đó ấn enter.<o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Sau khi user
nhập nickname, dòng 89 hoặc 91 sẽ gửi 1 emit : new-user<span
style='mso-spacerun:yes'>  </span>lên server với data là tên user nhập vào <o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%'>Server.js<o:p></o:p></span></b></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_18" o:spid="_x0000_i1037" type="#_x0000_t75" style='width:468pt;
 height:177pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image018.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=236
src="README_files/image019.jpg" v:shapes="Picture_x0020_18"><![endif]></span><b
style='mso-bidi-font-weight:normal'><span style='font-size:13.0pt;line-height:
107%'><o:p></o:p></span></b></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Tại server,
chúng ta sẽ xử lí emit : “new -user”<span style='mso-spacerun:yes'>  </span>đặt
tên cho socket kết nối tới bằng data nhận được từ client, lưu nó vào mảng
users, sau đó gọi làm updateUsernames() <o:p></o:p></span></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_19" o:spid="_x0000_i1036" type="#_x0000_t75" style='width:468pt;
 height:58.5pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image020.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=78
src="README_files/image021.jpg" v:shapes="Picture_x0020_19"><![endif]></span><span
style='font-size:13.0pt;line-height:107%'><o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Hàm
updateUsernames() sẽ gửi tới tất cả client 1 emit : get user, kèm data là mảng users,
client sẽ nhận emit này và cập nhật lại list các user online.<o:p></o:p></span></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_20" o:spid="_x0000_i1035" type="#_x0000_t75" style='width:304.5pt;
 height:183.75pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image022.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=406 height=245
src="README_files/image022.png" v:shapes="Picture_x0020_20"><![endif]></span><span
style='font-size:13.0pt;line-height:107%'><o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Dòng 30<span
style='mso-spacerun:yes'>  </span>thực hiện việc emit : “join –room ’ cho tất cả
client ngoại trừ socket hiện thời, để thông báo cho các user khác là có người
đã tham gia phòng chat<o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%'>Index.html<o:p></o:p></span></b></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_26" o:spid="_x0000_i1034" type="#_x0000_t75" style='width:468pt;
 height:97.5pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image023.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=130
src="README_files/image024.jpg" v:shapes="Picture_x0020_26"><![endif]></span><b
style='mso-bidi-font-weight:normal'><span style='font-size:13.0pt;line-height:
107%'><o:p></o:p></span></b></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%;mso-no-proof:
yes'>Client lắng nghe emit “get user” từ server với data nhận được là mảng
users, ta sẽ tạo các thẻ &lt;li&gt; tương ứng độ dài mảng users <o:p></o:p></span></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_21" o:spid="_x0000_i1033" type="#_x0000_t75" style='width:468pt;
 height:146.25pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image025.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=195
src="README_files/image026.jpg" v:shapes="Picture_x0020_21"><![endif]></span><span
style='font-size:13.0pt;line-height:107%'><o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><span
style='mso-spacerun:yes'> </span><o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Phía khi nhận
được emit joint-room từ server, chúng ta sẽ tạo 1 thẻ &lt;p&gt;<span
style='mso-spacerun:yes'>  </span>+ data để hiển thị thông báo có người tham
gia cuộc trò chuyện<o:p></o:p></span></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_23" o:spid="_x0000_i1032" type="#_x0000_t75" style='width:468pt;
 height:89.25pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image027.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=119
src="README_files/image028.jpg" v:shapes="Picture_x0020_23"><![endif]></span><span
style='font-size:13.0pt;line-height:107%'><o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Tiếp theo
chúng ta sẽ xử lí hiệu ứng khi ai đó đang nhập tin nhắn thì thông báo cho các
client còn lại<o:p></o:p></span></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_24" o:spid="_x0000_i1031" type="#_x0000_t75" style='width:468pt;
 height:65.25pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image029.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=87
src="README_files/image030.jpg" v:shapes="Picture_x0020_24"><![endif]></span><span
style='font-size:13.0pt;line-height:107%'><o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_25" o:spid="_x0000_i1030" type="#_x0000_t75" style='width:468pt;
 height:130.5pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image031.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=174
src="README_files/image032.jpg" v:shapes="Picture_x0020_25"><![endif]></span><span
style='font-size:13.0pt;line-height:107%'><o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Dòng 113
chúng ra lắng nghe user gõ phím, ngoại trừ phím enter(keycode = 13), ta sẽ bắn
1 emit tới server, server lắng nghe emit này, và gửi về emit : someone typing
kèm data là tên của socket đang nhập văn bản, phía client lắng nghe emit này,
gán text vào thẻ &lt;p&gt; có id = status với data là tên username của socket
đang nhập văn bản<o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:18.0pt;line-height:107%'>Xử lí khi socket ngắt kết nối tới
server<o:p></o:p></span></b></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%'>Server.js<o:p></o:p></span></b></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_27" o:spid="_x0000_i1029" type="#_x0000_t75" style='width:468pt;
 height:147.75pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image033.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=197
src="README_files/image034.jpg" v:shapes="Picture_x0020_27"><![endif]></span><b
style='mso-bidi-font-weight:normal'><span style='font-size:13.0pt;line-height:
107%'><o:p></o:p></span></b></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Dòng 51 sẽ lắng
nghe khi 1 user nào đó ngừng kết nối tới server, chúng ta thực hiện:<o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Dòng 54:
Thông báo cho các user khác 1 user tên socket.username đã rời khỏi nhóm chat bằng
1 emit : user-left<o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><span
style='mso-spacerun:yes'> </span>Dòng 55: Xóa user đó trong mảng user,<o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><span
style='mso-spacerun:yes'> </span>Dòng 56: Cập nhập lại list user online cho
client,<o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><span
style='mso-spacerun:yes'> </span>Dòng 58: Xóa socket đó trong mảng connections<o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:18.0pt;line-height:107%'>Xử lí nhắn tin giữa các socket<o:p></o:p></span></b></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%'>Index.html:<o:p></o:p></span></b></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_3" o:spid="_x0000_i1028" type="#_x0000_t75" style='width:468pt;
 height:118.5pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image035.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=158
src="README_files/image036.jpg" v:shapes="Picture_x0020_3"><![endif]></span><span
style='font-size:13.0pt;line-height:107%'><o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Khi user nhập
nội dung tin nhắn, chúng ta sẽ bắn 1 emit với nội dung send-message kèm data là
giá trị của ô input, sau đó set text cho ô input bằng đoạn string rỗng<o:p></o:p></span></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%'>Server.js<o:p></o:p></span></b></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_4" o:spid="_x0000_i1027" type="#_x0000_t75" style='width:468pt;
 height:148.5pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image037.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=198
src="README_files/image038.jpg" v:shapes="Picture_x0020_4"><![endif]></span><b
style='mso-bidi-font-weight:normal'><span style='font-size:13.0pt;line-height:
107%'><o:p></o:p></span></b></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Tại server sẽ
lắng nghe emit: send-message từ client gửi lên, sau đó emit lại cho client 2
emit để client có thể hiển thị giao diện tin nhắn đúng như mình muốn<o:p></o:p></span></p>

<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
style='font-size:13.0pt;line-height:107%'>Index.html<o:p></o:p></span></b></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_6" o:spid="_x0000_i1026" type="#_x0000_t75" style='width:468pt;
 height:159pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image039.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=212
src="README_files/image040.jpg" v:shapes="Picture_x0020_6"><![endif]></span><span
style='font-size:13.0pt;line-height:107%'><o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'>Tại client
chúng ta nhận được 2 emit từ server, 2 emit này chỉ khác nhau phần giao diện hiển
thị, tin nhắn của chính user đó thì chúng ta thêm style margin-left 50% để dịch
sang bên trái<o:p></o:p></span></p>

<p class=MsoNormal><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_7" o:spid="_x0000_i1025" type="#_x0000_t75" style='width:468pt;
 height:148.5pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="README_files/image041.png" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=624 height=198
src="README_files/image042.jpg" v:shapes="Picture_x0020_7"><![endif]></span><span
style='font-size:13.0pt;line-height:107%'><o:p></o:p></span></p>

<p class=MsoNormal><span style='font-size:13.0pt;line-height:107%'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>

</div>

</body>

</html>

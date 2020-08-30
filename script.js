function spacing(n){
	var space ='';
	for (i=0; i<n;i++){
		space+='&nbsp';
	}
	return space;
}

var biodata = `
	<table>
		<tr><td>Tanggal lahir${spacing(100)}</td><td>3 Juni 1999</td></tr>
		<tr><td><hr></td></tr>
		<tr><td>Tempat lahir</td><td>Medan</td></tr>
		<tr><td><hr></td></tr>
		<tr><td>Hobbies</td><td>Nonton film , Main game</td>	</tr>
	</table>
`;

var pendidikan = `
	<table>
		<tr><td>Sekolah Menengah Atas${spacing(90)}</td><td>2014 - 2017</td></tr>
		<tr><td>SMA Sutomo 1 Medan</td></tr>
		<tr><td><hr></td></tr>
		<tr><td>Sekolah Teknik Elektro dan Informatika</td><td>2018 - now</td></tr>
		<tr><td>Insitut Teknologi Bandung</td><td></td></tr>
	</table>
`;

var pengalaman = `
	<table>
		<tr><td>Anggota Divisi Media dan Komunikasi${spacing(40)}</td><td>2018 </td></tr>
		<tr><td>Keluarga Mahasiswa Buddhis ITB</td></tr>
		<tr><td><hr></td></tr>
		<tr><td>Anggota Relasi Eksternal Wisuda Oktober (ITB)</td><td>2018	</td></tr>
		<tr><td>ITB</td></tr>
		<tr><td><hr></td></tr>
		<tr><td>Anggota Divisi Logistik Bakti Sosial KMB ITB</td><td>2018</td></tr>
		<tr><td>ITB</td></tr>
	</table>
`;

var skill = `
	<table>
		<tr><td>Microsoft Offices ( Excel , Word , Powerpoint)</td></tr>
		<tr><td>${rating(10,0)}</td></tr>
		<tr><td>Programming ( Python, C++, Java)</td></tr>
		<tr><td>${rating(7,3)}</td></tr>
		<tr><td>Photoshop</td></tr>
		<tr><td>${rating(6,4)}</td></tr>
	</table>
`;

function rating(checked,unchecked){
	var text=''
	for (var i=0;i<checked;i++){
		text+='<span class="fa fa-star checked"></span>';
	}
	for (var i=0; i<unchecked;i++){
		text+='<span class="fa fa-star"></span>';
	}
	return text;
}


function changeclass(id_string, class_string){
	document.getElementById(id_string).className=class_string;
}

function changehtml(content){
	document.getElementById('content').innerHTML=content;
}

function resetbuttons(){
	changeclass('biodata', 'btn');
	changeclass('pendidikan', 'btn');
	changeclass('pengalaman', 'btn');
	changeclass('skill', 'btn');
}

function klik(button_id, content){
	document.getElementById(button_id).onclick=function(){
		resetbuttons();
		changeclass(button_id, 'btn active');
		changehtml(content);
	}	
}

changehtml(biodata);
klik('biodata', biodata);
klik('pendidikan', pendidikan);
klik('pengalaman', pengalaman);
klik('skill', skill);
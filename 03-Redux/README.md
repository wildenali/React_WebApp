## Step-step pada redux:
- State pada component React dipindah / diletakan di dalam pusat state yang disebut Store.
- Ketika component ingin merubah state, maka lakukan dispatch Action
- Action bisa dikatakan sebagai messenger, yaitu pembawa informasi untuk reducer. Informasi wajib berupa type dan informasi optiona berupa data payload. Isi dari type hanya berupa string deskripsi.
- Reducer akan menerima Action dan membaca pesan di dalam nya. Reducer menentukan apa yang akan dilakukan terhadap Store berdasar info type dari Action. Sedangkan payload Action dapat digunakan untuk memberikan data baru pada Store.
- State Store akan berubah sesuai yang dilakukan Reducer
- Perubahan state pada Store akan menginformasikan kepada semua Component yang sudah melakukan subscribe, dan mengirimkan state baru melalui props.
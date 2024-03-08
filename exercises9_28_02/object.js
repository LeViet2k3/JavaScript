var sachs = [
    {
        tacgia: 'Harper Lee',
        tieuDe: ' To Kill a Mockingbird',
        namXuatBan: 2020,
        trangthai: true
    },
    {
        tacgia: 'Ray Bradbury',
        tieuDe: ' Fahrenheit 451',
        namXuatBan: 2022,
        trangthai: false
    }
]
for (let item in sachs) {
    console.log(`Tac gia: ${sachs[item].tacgia}`)
    console.log(`Tieu de: ${sachs[item].tieuDe}`)
    console.log(`Nam xuat ban: ${sachs[item].namXuatBan}`)
    console.log(`Trang thai: ${sachs[item].trangthai}`)
}
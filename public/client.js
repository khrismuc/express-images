
async function main() {
    const response = await fetch("/api/images");
    const images = await response.json();

    const div = document.getElementById('ajaximages');
    images.forEach(filename => {
        const img = document.createElement('img');
        img.setAttribute('src', "/images/" + filename);
        img.setAttribute('width', "100px");
        div.append(img);
    });
}
main();
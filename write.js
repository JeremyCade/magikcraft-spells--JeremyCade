const magik = magikcraft.io;

function write() {
	const font = {
        a:[0,24,36,138,198,198,138,138],
        b:[192,192,192,192,252,194,194,252],
        c:[255,192,192,192,192,192,192,255],
        d:[256,195,195,195,195,195,195,256]
    };

    function binary(letter) {
        return letter.map(line => line.toString(2));
    }

    const a = binary (font.a);
    a.forEach(line => maigk.dixit(line.padStart("0", 8)));

}
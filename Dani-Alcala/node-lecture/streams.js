//stream es corriente de información

process.stdin.on('readable', () => {
    const chunk = process.stdin.read()
    if(chunk !== null) {
        process.stdout.write('q tal');
    }
})
export function generateHandle(input: string) {
    // Konvertera strängen till lowercase
    let result = input.toLowerCase();

    // Ersätt whitespace, punkturering och andra udda karaktärer med bindelstreck
    result = result.replace(/[\s\/,.:;&$]+/g, '-');

    // Ersätt flera bindelstreck i rad med ett enda
    result = result.replace(/-+/g, '-');

    // Ta bort bindelstreck i början eller slutet
    result = result.replace(/^-+|-+$/g, '');

    return result;
}
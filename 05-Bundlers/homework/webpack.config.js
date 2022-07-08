module.exports = {
    entry: './browser/app.js', /**punto de arrancque del transcompilador*/
    output: {
        path: __dirname + '/browser', /**El destino absoluto donde se guardara el archivo resultante */
        filename: 'bundle.js' /**nombre que tomará nuestro archivo final usando tipicamente bundle.js */
    },
    watch: true /**continua escuchando los cambios el archivo app.js para realizar los cambios */,
    mode: 'development', /**determina si se ejutara como desarrollo o como produccion */
    //mode: 'production',
}
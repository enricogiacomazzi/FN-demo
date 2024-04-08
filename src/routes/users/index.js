

export default async function(app) {
    app.get('/', async (req, res) => {
        const {rows} = await app.pg.query(`SELECT * from tbl_test;`);
        return rows;
    });
}
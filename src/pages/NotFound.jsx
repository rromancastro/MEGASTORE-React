import { Layout } from "../index"

export const NotFound = () => {
    return (
        <Layout>
            <div style={{display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center', width: '100%', height: '90vh'}}>
                <h2 style={{textAlign: 'center', fontSize: '80px'}}>error 404</h2>
                <h2 style={{textAlign: 'center', fontSize: '80px'}}>RUTA NO ENCONTRADA</h2>
            </div>
        </Layout>
    )
}
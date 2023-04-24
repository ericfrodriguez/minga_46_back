let name = 'companies'
let read = (req,res,next)=> res.status(200).render(
    'index',    //nombre de la vista
    {          //objeto con los datos que necesita la vista para renderizarse correctamente
        title: '/'+name.toUpperCase(),
        subtitle: 'endpoints of '+name
    }
)
export default read
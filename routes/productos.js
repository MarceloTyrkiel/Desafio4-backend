
const router = require('express').Router();

const productos =[];


router.get('/productos',(req,res) => {
    res.send({productos});
})

router.post('/productos',(req,res) => {
    const id = productos.length === 0 ? 1: productos[productos.length - 1].id + 1
    const {title,price,thumbnail} = req.body;
    productos.push({id,title,price,thumbnail});
    res.json ({ok:true})
})

router.get('/productos/:id', (req,res) => {
    const foundProducto = productos.filter(item=> item.id == req.params.id)
      if(!foundProducto) return null
    res.send({foundProducto})
})

router.delete('/productos/:id', (req,res) => {
    const ProductoBorrado = productos.filter(item=> item.id != req.params.id)
    res.send({ProductoBorrado})
})

router.put('/productos/:id', (req,res) => {
    const ProductoBorrado = productos.filter(item=> item.id != req.params.id)
    const id = parseInt(req.params.id)
    const {title,price,thumbnail} = req.body;
    ProductoBorrado.push({id,title,price,thumbnail});
    res.send({ProductoBorrado})
})


module.exports = router;
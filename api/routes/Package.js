const router = express.Router(),
Package = require('../controllers/PackageController');

router.get('/', Package.getShootApi);
router.get('/:id', Package.getIdShootApi);
router.post('/', Package.postShootApi);

router.post('/:id', Package.ShootApi);

router.put('/:id', Package.putShootApi);
router.patch('/:id', Package.patchShootApi);
router.delete('/:id', Package.deleteShootApi);

module.exports = router;

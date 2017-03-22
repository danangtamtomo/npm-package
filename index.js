/**
 * Created by Danang Aji Tamtomo on 3/22/17.
 */

function IndonesianRupiah () {
  this.nominal = 0
  // this.delimiter = delimiter
}

IndonesianRupiah.prototype.setNominal = function (nominal) {
  this.nominal = nominal
}
IndonesianRupiah.prototype.getRupiah = function () {
  var convert = new Intl.NumberFormat('id-IDR', {
    style: 'currency',
    currency: 'IDR',
    minimumFractioDigits: 2
  }).format(this.nominal)
  return convert
}


module.exports = new IndonesianRupiah()



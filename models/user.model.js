module.exports = function(mongoose){
    return [{
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    temperature: {type: String, required: true},
    email: {type: String},
    dni: {type: String, required: true},
    phone: {type: String, required: true},
    direccion: {type: String, required: true}
}, {
    timestamps: true,
    createdby: true,
    updatedby: true
}]
};
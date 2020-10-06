const get_by_id = async (model, id) => {
    const result = await model.findByPk(id);

    return result ? result.get() : undefined;
};


const find_all = async (model, where) => {
    const result = await model.findAll({
        where: where
    });

    return result
};


const save = async (model, body) => {
    const result = await model.create(body);

    return result ? result.get() : undefined;
};


const update = async (model, body) => {
    const result = model.update(body, { 
        where: {
            id: body.id
        }
    });

    return result ? result : undefined;
};


const delete_data = async(model, id) => {
    const result = await model.update({ is_active: 0 },  {
        where: {
            id
        }
    });

    return result ? result : undefined;
};


const find_by_id = async(model, id) => {
    const result = await model.findByPk(id);

    return result ? result : undefined;
}


module.exports.get_by_id = get_by_id;
module.exports.find_all = find_all;
module.exports.save = save;
module.exports.update = update;
module.exports.delete_data = delete_data;
module.exports.find_by_id = find_by_id;
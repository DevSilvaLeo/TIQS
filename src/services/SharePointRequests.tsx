import { IList } from "@pnp/sp/lists";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/attachments";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import "@pnp/sp/search";
import { IFile } from "@pnp/sp/files";
import { ISuggestQuery, ISuggestResult } from "@pnp/sp/search";


var webUrl = window.location.protocol + "//" + window.location.hostname + "/" + window.location.pathname.split('/')[1] + "/" + window.location.pathname.split('/')[2];

//Setup necessário para retorno de infomações em formato JSON
sp.setup({
    sp: {
        headers: {
            Accept: "application/json;odata=verbose",
        },
        baseUrl: webUrl
    },
});


// CRUD
//Adiciona um item a lista
export const AddListItem = (listGuid: string, item: any) => new Promise((resolve, reject) => {
    sp.web.lists.getById(listGuid).items.add(item)
        .then(newItem => {
            resolve(newItem);
        })
        .catch(err => {
            reject(err);
        });
});

//Edita um item de lista pelo ID
export const EditListItem = (listGuid: string, id: number, item: any) => new Promise((resolve, reject) => {
    sp.web.lists.getById(listGuid).items.getById(id).update(item)
        .then(updateItem => {
            resolve(updateItem);
        })
        .catch(err => {
            reject(err);
        });
});

//Deleta um item de lista pelo ID
export const DeleteItem = async (listGuid: string, item: any) => new Promise(async (resolve, reject) => {
    sp.web.lists.getById(listGuid).items.getById(item).delete()
        .then(() => {
            resolve(true);
        })
        .catch(err => {
            reject(err);
        });
});

//Recupera todos os itens
export const GetAllItens = (listGuid: string) => new Promise((resolve, reject) => {
    sp.web.lists.getById(listGuid).items.getAll()
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        });
});

//Recupera um item selecionando colunas e filtrando
export const GetItemFiltered = (listGuid: string, select: string, filter: string,) => new Promise(async (resolve, reject) => {
    await sp.web.lists.getById(listGuid).items.select(select).filter(filter).top(50000).get()
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        });
});

//Recupera um item pelo id
export const GetItemById = (listGuid: string, idItem: number) => new Promise(async (resolve, reject) => {
    await sp.web.lists.getById(listGuid).items.getById(idItem).get()
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        });
});

//Recupera um item selecionando colunas e filtrando e expandindo coluna
export const GetItemExpandedFiltered = (listGuid: string, select: string, filter: string, expand: string) => new Promise(async (resolve, reject) => {
    await sp.web.lists.getById(listGuid).items.expand(expand).select(select).filter(filter).top(50000).get()
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        });
});

export const GetFiles = (libraryName: string) => new Promise((resolve,reject) => {
    sp.web.getFolderByServerRelativeUrl(libraryName).files.expand("ListItemAllFields").get()
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        });
});
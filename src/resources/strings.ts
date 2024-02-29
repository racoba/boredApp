import "moment/locale/pt-br"
import LocalizedStrings from "localized-strings"

const strings = new LocalizedStrings({
    ptBR:{
        removeCharactersExceptLetterNumber: (character: string) => character.replace(/[^a-zA-Z0-9]/g, ""),
        enum: {
            StateUF: {
                AC: "Acre",
                AL: "Alagoas",
                AP: "Amapá",
                AM: "Amazonas",
                BA: "Bahia",
                CE: "Ceará",
                DF: "Distrito Federal",
                ES: "Espírito Santo",
                GO: "Goiás",
                MA: "Maranhão",
                MT: "Mato Grosso",
                MS: "Mato Grosso do Sul",
                MG: "Minas Gerais",
                PA: "Pará",
                PB: "Paraíba",
                PR: "Paraná",
                PE: "Pernambuco",
                PI: "Piauí",
                RJ: "Rio de Janeiro",
                RN: "Rio Grande do Norte",
                RS: "Rio Grande do Sul",
                RO: "Rondônia",
                RR: "Roraima",
                SC: "Santa Catarina",
                SP: "São Paulo",
                SE: "Sergipe",
                TO: "Tocantins",
            },
        components:{

        },
        pages: {

        },
        common:{

        }
    },
}})

export default strings;
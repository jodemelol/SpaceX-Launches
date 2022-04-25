import { background, extendTheme } from "@chakra-ui/react"

export default extendTheme({
    styles:{
        global:{
            'html,body':{
                color:"white",
                backgroundColor:"black"
            }
        }
    },
    colors:{
        card:"linear-gradient(90deg, rgba(10,14,32,1) 30%, rgba(22,113,131,1) 100%);"
    }
})
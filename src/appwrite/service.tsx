import {ID,Client,Account} from "appwrite";
import Config from "react-native-config";


const appWriteClient = new Client();

const APPWRITE_ENDPOINT: string = "https://cloud.appwrite.io/v1" ;
const APPWRITE_PROJECTID: string = "655d8fbc07ec8ba46d8c" ;

type CreateUserAccount = {
    email: string,
    password: string,
    name: string
}

type LogInUserAccount = {
    email: string,
    password: string
}


class AppWriteService {
    account: Account ;
    constructor () {
        appWriteClient
          .setEndpoint(APPWRITE_ENDPOINT)
          .setProject(APPWRITE_PROJECTID)
          
          this.account = new Account(appWriteClient);
    }

    //create user 
    async createAccount({email,password,name}: CreateUserAccount){
        try {
            const userAccount =await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if(userAccount){
                this.login({email,password})
            } else {
                return userAccount ;
            }
            
        } catch (error) {
            console.log("error occure :",error)
        }
      }

      async login({email,password}: LogInUserAccount){
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            console.log("login error occure ::",error)
        }
      }

      async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("user error :::",error); 
        }
      }

      async logout() {
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            console.log("error logout ::",error);
            
        }
      }
}

export default AppWriteService;
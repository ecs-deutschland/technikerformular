import React from "react";
import Kopfdaten from "./Kopfdaten";
import Systeme from './Systeme'
import Netzwerkparameter from "./Netzwerkparameter";
import Sonstiges from "./Sonstiges";

class Main extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            kundenkonto: false, pubid: "", lizenzenUmzug: false,
            kundenname: "", kundenstrasse: "", kundenhnr: "", kundenplz: "", kundenort: "", kundenansprechpartner: "",
            remote: false, remoteType: "unify", remoteConnectionType: "router",
            keypassLogin: "", keypassPassword: "", storedOnAdminPC: false,
            system: "openScape4000", deployment: "", traegersystem: "",
            hersteller: "", serverTyp: "", seriennummer: "", 
            version: "", sielId: "", ipAdresse: "", betriebssystem: "",
            laufzeitendeSLES: "", ecsknr: "", ecsanlnr: "",
            personalnummer: "", vorname: "", nachname: "", datum: new Date(),
            standortdetails: "", raumdetails: "", klimatisiert: false,
            // Netzwerkparameter
            dns: "", ntp: "", default_gateway: "",
            // States bezogen auf OS4000, Business und Voice
            os4000_anzahlAbgesetzterStandorte: "", os4000_amtsanschluss: "ISDN", os4000_provider: "",
            os4000_produkt: "", os4000_anzahlKanaele: "", os4000_rufnummernblock: "", os4000_endgeraeteTypen: "",
            os4000_cordless: "DECT", os4000_verschluesselung: false, os4000_bemerkung: "",
            // States bezogen auf OSExpressions
            osExpressions_artDerAnbidnung: "S0", osExpressions_anzahlKanaele: "", osExpressions_satellitVorhanden: false,
            osExpressions_cti: false,  osExpressions_ctiBeschreibung: "", osExpressions_audiokonferenz: false,
            osExpressions_zertifikate: false, osExpressions_zertifikateAuslaufdatum: new Date(), osExpressions_applicationGenerator: false,
            // States bezogen auf OSContactCenter
            osCC_sonderanbindungen_extension: false, osCC_anbindungAnTk: "CDSS", osCC_anzahlKanaele: "", 
            osCC_sonderanbindungen_coc: false, osCC_sonderanbindungen_datenbankanbindung: false,
            osCC_zertifikate: false, osCC_auslaufdatum: new Date(), osCC_bemerkung: "",
            // States bezogen auf OSUCApplications
            osUC_facadeServer: false, osUC_dmz: false, osUC_ipAdresse: "", osUC_audiokonferenz: false, osUC_webCollaboration: false,
            osUC_groupwareConnector: false, osUC_clientAnmeldung: false, osUC_username: "", osUC_passwort: "", osUC_windowsAuth: "",
            osUC_singleSignOn: "", osUC_zertifikate: false, osUC_auslaufdatum: new Date(), osUC_bemerkung: "",
            // States bezogen auf XPhone
            XPhone_voicemail: false, XPhone_fax: false, XPhone_cti: false, XPhone_audiokonferenz: false, XPhone_webCollaboration: false,
            XPhone_iis: false, XPhone_dmz: false, XPhone_ipAdresse: "", XPhone_clientAnmeldung: false, XPhone_username: "", XPhone_passwort: "",
            XPhone_windowsAuth: "", XPhone_singleSignOn: "", XPhone_zertifikate: false, XPhone_auslaufdatum: "", XPhone_virtualDirectory: false,
            XPhone_bemerkung: "",
            // States bezogen auf OS SBC
            osSBC_tnRegistrierung: false, osSBC_SIPProvider: false, osSBC_circuitConnector: false, osSBC_zertifikate: false,
            osSBC_auslaufdatum: new Date(), osSBC_bemerkung: "",
            // States bezogen auf OS VMWare
            vmWare_verantwortlicher: "ECS", vmWare_besitzer: "ECS", vmWare_zugriff: false,
            // Backups
            backUp_automatisch: false, backUp_speicherort: "",
        }
    }

    handleChange(event){
        const {id, type, checked, value} = event.target
        console.log(event.target)
        type === 'checkbox' ?
            this.setState({[id]:checked}) :
            this.setState({[id]:value})
    }

    render(){
        return (
            <main className="main">
                <Kopfdaten handleChange={this.handleChange} state={this.state} />
                <Systeme handleChange={this.handleChange} state={this.state} />
                <Netzwerkparameter handleChange={this.handleChange} state={this.state} />
                <Sonstiges />
            </main>
        )
    }
}

export default Main
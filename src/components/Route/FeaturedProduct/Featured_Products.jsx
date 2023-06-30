import StartFirebase from '../../../firebaseconfig.js';
import React from 'react';
import {ref, onValue} from 'firebase/database';
import firebase from "firebase/app";
import "firebase/database";
const db = StartFirebase();

export class Featured_Products extends React.Component{
    constructor(){
        super();
        this.state == {
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef = ref(db, 'vouchers');

        onValue(dbRef, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key":keyName, "data": data});
            });
            this.setState({tableData: records});
        });
    }

    render(){
        return (
            <div>
              <div className={`${styles.section}`}>
                <div className={`${styles.heading}`}>
                  <h1 style={{ color: "white" }}>Featured Products</h1>
                </div>
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
                  {
                        this.state.tableData.map((product, index) => (
                      <ProductCard data={product} key={index} />
                    ))}
                </div>
              </div>
            </div>
          );
    }

}
// Vendors
import React from "react";
import { Button, Collapse } from "antd";

// Next
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";

// Component
import Layout from "../../components/layout2";

const Heads = dynamic(() => import("../../components/head"));
const Footer = dynamic(() => import("../../components/layout/footer"));
const { Panel } = Collapse;

//style
import { Wrapper } from "./style";

export default function PaymentNext({ appName }) {

  return (
    <>
      <Head>
        <title>Pembayaran{appName}</title>
      </Head>
      <Layout>
        <Heads title="BCA" />
        <Wrapper>
          <div className="payment-list">
            <div className="payment-list__va">
              <h3>Nomor Akun Virtual BCA</h3>
              <div className="num-va">39010899129238849</div>
              <div className="btn-va">
                <Button>SALIN CODE</Button>
              </div>
            </div>
            <div className="divider"></div>
            <div className="payment-list__ins">
              <Collapse accordion expandIconPosition="right">
                <Panel header="ATM BCA" key="1">
                  <ul>
                    <li>
                      Masukan kartu ATM dan PIN BCA anda
                    </li>
                    <li>
                      Pilih Menu <b>TRANSAKSI LAINNYA > TRANFER > KEREKENING BCA VIRTUAL ACCOUNT</b>
                    </li>
                    <li>
                      Masukkan <b>39010899129238849</b> sebagai rekening tujuan
                    </li>
                    <li>Masukkan Jumlah tagihan Anda</li>
                    <li>Ikuti Instruksi untuk menyelesaikan transaksi</li>
                  </ul>
                </Panel>
                <Panel header="KLIK BCA" key="2">
                <ul>
                    <li>
                      Masukan kartu ATM dan PIN BCA anda
                    </li>
                    <li>
                      Pilih Menu <b>TRANSAKSI LAINNYA > TRANFER > KEREKENING BCA VIRTUAL ACCOUNT</b>
                    </li>
                    <li>
                      Masukkan <b>39010899129238849</b> sebagai rekening tujuan
                    </li>
                    <li>Masukkan Jumlah tagihan Anda</li>
                    <li>Ikuti Instruksi untuk menyelesaikan transaksi</li>
                  </ul>
                </Panel>
                <Panel header="BCA MOBILE" key="3">
                <ul>
                    <li>
                      Masukan kartu ATM dan PIN BCA anda
                    </li>
                    <li>
                      Pilih Menu <b>TRANSAKSI LAINNYA > TRANFER > KEREKENING BCA VIRTUAL ACCOUNT</b>
                    </li>
                    <li>
                      Masukkan <b>39010899129238849</b> sebagai rekening tujuan
                    </li>
                    <li>Masukkan Jumlah tagihan Anda</li>
                    <li>Ikuti Instruksi untuk menyelesaikan transaksi</li>
                  </ul>
                </Panel>
                <Panel header="m-bca (STK - SIM Tool Kit)" key="4">
                <ul>
                    <li>
                      Masukan kartu ATM dan PIN BCA anda
                    </li>
                    <li>
                      Pilih Menu <b>TRANSAKSI LAINNYA > TRANFER > KEREKENING BCA VIRTUAL ACCOUNT</b>
                    </li>
                    <li>
                      Masukkan <b>39010899129238849</b> sebagai rekening tujuan
                    </li>
                    <li>Masukkan Jumlah tagihan Anda</li>
                    <li>Ikuti Instruksi untuk menyelesaikan transaksi</li>
                  </ul>
                </Panel>
              </Collapse>
            </div>
          </div>
          <div className="payment-btn">
            <Button type="primary">
                Konfirmasi
            </Button>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}

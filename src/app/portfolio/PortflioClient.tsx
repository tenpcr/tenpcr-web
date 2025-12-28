"use client";

import PortfolioLists from "@/components/portfolio/PortfolioLists";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

function PortfolioCategory() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <PortfolioLists />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default PortfolioCategory;

<template>
      <div id="app" :class="{'is-loading': isLoading}">
            <Overlay v-if="isLoading" />
            <div v-else class="packages-container">
                  <CloudPackageGroup :selectedPackIndex="selectedPackIndex" :packIndex="index" @setSelectedPack="setSelectedPack" v-for="(pack, index) in groupedPackages" :key="`pack-${index}`" :darkMode="darkMode" :pack="pack" />
            </div>
            <Toggler ref="toggler" @change="setMode" />
      </div>
</template>

<script>
// Components:
import Toggler from "@/components/shared/Switch/switch";
import CloudPackageGroup from "@/components/feature/CloudPackageGroup/CloudPackageGroup";
import Overlay from "@/components/shared/Overlay/overlay";

//Utils:
import { defaultOptions as options } from "@/api/defaultOptions";
import { API_URL as url } from "@/environments";
import { groupBy } from '@/utils/utils';

export default {
      name: "App",
      components: { Toggler, CloudPackageGroup, Overlay },
      data() {
            return {
                  darkMode: false,
                  packages: [],
                  isLoading: false,
                  selectedItem: {},
                  selectedPackIndex: null,
                  selectedPackId: null
            };
      },
      async created() {
            this.isLoading = true;
            await this.getPackages();
      },
      mounted() {
            this.handleDarkMode();
            
      },
      watch: {
            darkMode: function () {
                  // add/remove class to/from html tag
                  let htmlElement = document.documentElement;

                  if (this.darkMode) {
                        localStorage.setItem("theme", "dark");
                        htmlElement.setAttribute("theme", "dark");
                  } else {
                        localStorage.setItem("theme", "light");
                        htmlElement.setAttribute("theme", "light");
                  }
            },
      },
      computed: {
            groupedPackages(){
                  return this.groupBy(this.packages, 'packageType');
            }
      },
      methods: {
            groupBy: groupBy,
            handleDarkMode(){
                  // Add event listener to check if the operating system's dark mode is enabled or not.
                  window.matchMedia("(prefers-color-scheme: dark)").addEventListener(
                        "change",
                        (e) => {
                              this.darkMode = e.matches ? true : false;
                              this.$refs.toggler.handleSwitchStatus();
                        }
                  );

                  // Check dark mode status for first load.
                  const isDarMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                  if (isDarMode) {
                        this.darkMode = true;
                        this.$refs.toggler.handleSwitchStatus();
                  }

                  // Set 'app-background' Class to body to show dark/light mode
                  let bodyElement = document.body;
                  bodyElement.classList.add("app-background");
            },
            setMode(mode) {
                  this.darkMode = mode;
            },
            getPackages() {
                  fetch(url, options)
                        .then((response) => {
                              response.json().then((data) => {
                                    this.packages = data.data;
                                    setTimeout(() => {
                                          this.isLoading = false;
                                    }, 1500);
                              });
                        })
                        .catch((e) => {
                              console.log(e);
                        });
            },
            setSelectedPack(id){
                  this.groupedPackages.forEach((groupedPackage, groupedPackageIndex) => {
                        groupedPackage.forEach(pack => {
                              const packId = pack.id;
                              (packId === id) && this.setSelectedPackDetails({ groupedPackageIndex, pack, packId })
                        })
                  });
            },
            setSelectedPackDetails(details){
                  const { groupedPackageIndex : index, pack, packId } = details;
                  this.selectedItem = pack;
                  this.selectedPackIndex = index;
                  this.selectedPackId = packId;
            }
      },
};
</script>

<style lang="scss">
      /* width */
      ::-webkit-scrollbar {
      width: 10px;
            border-radius: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
            background: #f1f1f1; 
      }
      
      /* Handle */
      ::-webkit-scrollbar-thumb {
            background: #adadad; 
            border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
            background: #555; 
      }
      .is-loading{
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
      }

      .packages-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 23px 29px;
      }
</style>

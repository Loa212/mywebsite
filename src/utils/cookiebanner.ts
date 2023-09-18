export type CookiePreferences = {
  strictlyNecessary: boolean;
  preferences: boolean;
  thirdParty: boolean;
};

const showMainCookieBanner = () => {
  const mainCookieBanner =
    document.querySelector<HTMLDivElement>("#cookieBanner");
  if (mainCookieBanner) {
    mainCookieBanner.style.display = "block";
  }
};

const showSmallerCookieBanner = () => {
  const smallerBanner = document.querySelector<HTMLDivElement>(
    "#smallerCookieBanner"
  );
  if (smallerBanner) {
    smallerBanner.style.display = "block";
  }
};

const hideMainCookieBanner = () => {
  const mainCookieBanner =
    document.querySelector<HTMLDivElement>("#cookieBanner");
  if (mainCookieBanner) {
    mainCookieBanner.style.display = "none";
  }
};

const hideSmallerCookieBanner = () => {
  const smallerBanner = document.querySelector<HTMLDivElement>(
    "#smallerCookieBanner"
  );
  if (smallerBanner) {
    smallerBanner.style.display = "none";
  }
};

const showCookiePrefsModal = () => {
  const modal = document.querySelector<HTMLDialogElement>("#cookiePrefsModal");
  modal?.showModal();
};

const hideCookiePrefsModal = () => {
  const modal = document.querySelector<HTMLDialogElement>("#cookiePrefsModal");
  modal?.close();
};

function mountCookiePolicyBanner(timeout: number = 1000) {
  setTimeout(() => {
    main();
  }, timeout);
}

function main() {
  // Check if the user has previously saved cookie preferences
  const savedCookiePrefs = localStorage.getItem("cookiePrefs");
  let acceptedStrictlyNecessary = false;

  // Check if the user has previously saved preferences and apply them
  if (savedCookiePrefs) {
    const preferences: CookiePreferences = JSON.parse(savedCookiePrefs);
    // Apply saved preferences here (customize this part)
    const strictlyNecessaryCheckbox = document.querySelector<HTMLInputElement>(
      "#strictlyNecessaryCheckbox"
    );
    const preferencesCheckbox = document.querySelector<HTMLInputElement>(
      "#preferencesCheckbox"
    );
    const thirdPartyCheckbox = document.querySelector<HTMLInputElement>(
      "#thirdPartyCheckbox"
    );
    if (
      strictlyNecessaryCheckbox &&
      preferencesCheckbox &&
      thirdPartyCheckbox
    ) {
      strictlyNecessaryCheckbox.checked = preferences.strictlyNecessary;
      preferencesCheckbox.checked = preferences.preferences;
      thirdPartyCheckbox.checked = preferences.thirdParty;
    }

    acceptedStrictlyNecessary = preferences.strictlyNecessary;

    if (!acceptedStrictlyNecessary) {
      // Disable scripts if strictly necessary cookies are not accepted
      console.log(
        "Scripts are disabled because strictly necessary cookies are not accepted."
      );
      // show the main cookie banner
      showMainCookieBanner();
    } else {
      // Hide the main cookie banner
      hideMainCookieBanner();

      // Show the smaller banner at the bottom left corner
      showSmallerCookieBanner();
    }
  }

  // ------------------ Event listeners & helpers ------------------

  // Function to save cookie preferences in localStorage
  function saveCookiePreferences(preferences: CookiePreferences) {
    localStorage.setItem("cookiePrefs", JSON.stringify(preferences));

    if (!preferences.strictlyNecessary) {
      // Disable scripts if strictly necessary cookies are not accepted
      console.log(
        "Scripts are disabled because strictly necessary cookies are not accepted."
      );
      hideSmallerCookieBanner();
      showMainCookieBanner();
      return;
    }

    // Hide the main cookie banner
    hideMainCookieBanner();

    // Show the smaller banner at the bottom left corner if necessary cookies are accepted
    showSmallerCookieBanner();
  }

  // Function to accept all cookies
  function acceptAllCookies() {
    const preferences: CookiePreferences = {
      strictlyNecessary: true,
      preferences: true,
      thirdParty: true,
    };

    acceptedStrictlyNecessary = true;
    saveCookiePreferences(preferences);
    savePrefsInModal(preferences);
    hideCookiePrefsModal();
  }

  // Event listener for "Cookie Preferences" link
  const cookiePrefsLink =
    document.querySelectorAll<HTMLButtonElement>("#cookiePrefsLink");
  cookiePrefsLink.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showCookiePrefsModal();
    });
  });

  // Event listener for Close button in modal
  const closeCookiePrefsModal = document.querySelector<HTMLButtonElement>(
    "#closeCookiePrefsModal"
  );
  if (closeCookiePrefsModal) {
    closeCookiePrefsModal.addEventListener("click", () => {
      hideCookiePrefsModal();
    });
  }

  // Event listener for "Accept All" button
  const acceptAllButton =
    document.querySelector<HTMLButtonElement>("#acceptAllButton");
  if (acceptAllButton) {
    acceptAllButton.addEventListener("click", () => {
      acceptAllCookies();
    });
  }

  // Event listener for "Save Preferences" button
  const saveCookiePrefsButton =
    document.querySelector<HTMLButtonElement>("#saveCookiePrefs");
  if (saveCookiePrefsButton) {
    saveCookiePrefsButton.addEventListener("click", () => {
      // Get user preferences from the modal
      const strictlyNecessaryCheckbox =
        document.querySelector<HTMLInputElement>("#strictlyNecessaryCheckbox");
      const preferencesCheckbox = document.querySelector<HTMLInputElement>(
        "#preferencesCheckbox"
      );
      const thirdPartyCheckbox = document.querySelector<HTMLInputElement>(
        "#thirdPartyCheckbox"
      );
      const preferences: CookiePreferences = {
        strictlyNecessary: strictlyNecessaryCheckbox?.checked || false,
        preferences: preferencesCheckbox?.checked || false,
        thirdParty: thirdPartyCheckbox?.checked || false,
      };

      if (!preferences.strictlyNecessary) {
        // Disable scripts if strictly necessary cookies are not accepted
        console.log(
          "Scripts are disabled because strictly necessary cookies are not accepted."
        );
      }

      // Save preferences and close modal
      saveCookiePreferences(preferences);
      hideCookiePrefsModal();
    });
  }

  // Event listener for "strictlyNecessaryCheckbox"
  // when the checkbox gets unchecked, the other checkboxes get unchecked too
  const strictlyNecessaryCheckbox = document.querySelector<HTMLInputElement>(
    "#strictlyNecessaryCheckbox"
  );
  if (strictlyNecessaryCheckbox) {
    strictlyNecessaryCheckbox.addEventListener("change", () => {
      if (!strictlyNecessaryCheckbox.checked) {
        const preferencesCheckbox = document.querySelector<HTMLInputElement>(
          "#preferencesCheckbox"
        );
        const thirdPartyCheckbox = document.querySelector<HTMLInputElement>(
          "#thirdPartyCheckbox"
        );
        if (preferencesCheckbox && thirdPartyCheckbox) {
          preferencesCheckbox.checked = false;
          thirdPartyCheckbox.checked = false;
        }
      }
    });
  }

  const savePrefsInModal = (preferences: CookiePreferences) => {
    const strictlyNecessaryCheckbox = document.querySelector<HTMLInputElement>(
      "#strictlyNecessaryCheckbox"
    );
    const preferencesCheckbox = document.querySelector<HTMLInputElement>(
      "#preferencesCheckbox"
    );
    const thirdPartyCheckbox = document.querySelector<HTMLInputElement>(
      "#thirdPartyCheckbox"
    );
    if (
      strictlyNecessaryCheckbox &&
      preferencesCheckbox &&
      thirdPartyCheckbox
    ) {
      strictlyNecessaryCheckbox.checked = preferences.strictlyNecessary;
      preferencesCheckbox.checked = preferences.preferences;
      thirdPartyCheckbox.checked = preferences.thirdParty;
    }
  };
}

export { mountCookiePolicyBanner };

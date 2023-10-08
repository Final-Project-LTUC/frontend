// import React from 'react';
// import {
//   Box,
//   Heading,
//   Image,
//   Text,
//   Divider,
//   HStack,
//   Tag,
//   SimpleGrid,
//   Container,
//   VStack,
// } from '@chakra-ui/react';

// const newsArticles = [
//   {
//     id: 1,
//     title: 'How to Fix Common Household Plumbing Issues',
//     tags: ['Plumbing', 'DIY'],
//     content:
//       'Learn how to fix common household plumbing issues on your own with our step-by-step guide.',
//     imageSrc:
//       'data:image/jpeg;base64,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',
//     author: 'John Doe',
//     date: new Date('2023-09-25T08:00:00Z'),
//   },
//   {
//     id: 2,
//     title: 'Top 10 Tools Every Handyman Should Have',
//     tags: ['Tools', 'Handyman'],
//     content:
//       'Discover the essential tools that every handyman should have in their toolkit.',
//     imageSrc:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIFh9b3qzEdIsunO_JFACoodx9iRC6An_dg&usqp=CAU',
//     author: 'Jane Smith',
//     date: new Date('2023-09-24T10:30:00Z'),
//   },
//   {
//     id: 3,
//     title: 'Home Electrical Wiring: A Comprehensive Guide',
//     tags: ['Electrical', 'DIY'],
//     content:
//       'Get a comprehensive guide to home electrical wiring, from basic concepts to advanced techniques.',
//     imageSrc:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcrVkKTOe_7cdwHZep0h7ZxTAPOiAvcsHfw&usqp=CAU',
//     author: 'Michael Johnson',
//     date: new Date('2023-09-23T14:15:00Z'),
//   },
//   {
//     id: 4,
//     title: 'Tips for Maintaining Your Garden Tools',
//     tags: ['Gardening', 'Tools'],
//     content:
//       'Learn how to properly maintain your garden tools to keep them in top condition.',
//     imageSrc:
//       'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBgVFRUYGBgaGhsaGxsbGxsbIxobHRsbGhodHRwbIC0kGyApIBoaJTclKS4wNjQ0GyM5PzkyPi0yNDABCwsLEA8QHhISHjIrJCsyMjIyMjIyMjIwMjIyMjIyMjIwMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABIEAACAQIEAwUEBgYIBQQDAAABAhEAAwQSITEFQVEGImFxgRORobEUMkLB0fAHI1JykuEVM0NigqLC0iREU9PxVIOy4hYXk//EABoBAAMBAQEBAAAAAAAAAAAAAAECAwQABQb/xAArEQACAgICAgEDBAEFAAAAAAAAAQIRAyESMQRBEyJRcTJhgZEUM0KhsdH/2gAMAwEAAhEDEQA/APVVFdLWq6Wrs8mPZutisrpRStlkrZgrLm1brm5qCBvUptOLplUqI8LZX60a66+E0h7Y49rahBqWBIA6jx9as1tQAAKqmP4bcxWKLEFLad3MecSZA8/lWTPB/EortlaFfZbs8b1u410QGBRddQebVFguxt/DqtwMCyt9VdwA2hB59Yq/8PwotItschv1PM0VQj4keKTGUEUnthZYMpLHvABVGgERmJPM0v7PYf2t32dxcyy0gzsBpr7qtvaLhnt7ehhlkrpM9RUvBcCLFpVgZiJYxuTSS8Xllt9ditbM+j28LZOVCVQEgAZm8hGpry3ilu/jLz3EtOJ0VYOgGmvIV7GNa6Ciq5fGU6XSQ3HkeVcN7OYxrbwTGZcynTMR0J3jej7/AGbvphmNpslwEh++RmSNQIHXr0r0ekvHbbMMq6DKSfMn/wA1DJ4sYR5K7RzgkUnhPZrPbN3E3rgyQAJnyEmdPCrThrg+hkGHyd0AaSBtPpzqJ+Gu+HBV9JzMOsae+osBYVbby4jmPuNQalFJce1tg6EJ49F8eyVvZqAGVdyRMlenL3UvxuPue0a5bZyhJZgd48SKgx6NbxSFAVUd4DzJmnlzgl68jXVyoSGIQmCwA1IgR6Vl4Xr/AIFUW2RL22W6oti2cygDMx36mOVNsH2ptZQpRg0asBmUxr5zHhSbhPZ5DY9o0C4xBHlMEHxiTQPEE9m5tWoZ20ncgbz4RVPqTtfYZcouy33u09m3bIUszEN3I1Dcg07CheH22xdoJezW1YljljvLrl1MgCYG1LbXB7V23Kh1cnV2YHMTygTHwpiOHrZtf1rscpBGn1Z2Hu08qLx8mpS3S0F8nv0WzhNhbaC2pMIABPrSq7xIriGUlMoPPcEACPfNCWOJ2zZZrbMGChe9MliQMw8gTVc45xdsNaX2YBd2IDETlA1YxzOo3q8p8lGKNeHCprk3pFtxtq2zLcKBSdS40DHlJG/kaGw1xXuNbUMkDRwDBaNfAil/YriD4i29u4wZWVspgAhueg23n0ovDXjYt5LrHNGnM6/hU5wqSf5sjlhxlQyGKa3lVoYnmOYpobiABjE8qQ3MfZMF2yyIDbgE8zXH0u4uUKUeD1PeHI+FaMfluMeMvfX7fkzOO+SGz3bjP3csc9J+NQtds2XLEAPzg7k13iMZ+oZ/qGNvGgrGHR7ea4YJYd7oT50mbI4tRi7b3bel/AYq22yTE3Q0mYkhjExlnSTQ2JdFjMFMmBB190VHjsNcsnNbbOuxldx+zpyqa0lxkBCx0gDbnrzrHL5YyaS/Psummv3G1m0SoMRpWUnW64+0ffWVf5J/df0daLABXYFc1IomvoGeZBWYKyayIrlqVlOjoVw5rYNaK1GcVxoZSbZOp0roVwlSCnSpF4uzYNaLVwwNcqDXNpDG2eu1StBKkBoJ3s5R+5sCt1G7hRJMClWK40ActsZj1MxXDjea06yIqpYnH3G/tGQnYqRy12503xN2/wCyXJGchdxuYEz0oPo5sHXPbF0IJE6L0npVRS5cuOx+qqtJE7ny516BYsMUBuRnjUiklrs4ntc5YxvG0msHlLaQqRWMOj4m9JA7ugPT8aslmw1sFSzHMTqW+UbeVS3ODiw7XUbunUr0PhS/E4r2gZSdW+oRoQ3LXmKlDGo1fbYU+LCXuggHUxzGwjlFKcPbAuXLlq0We6hWeh0n90wKZe1uXGtrbTW2gYq8qHaAToN4MGeZFHcBvZc2ZYLN3pGUg7bdKs1GMkm/5rQG3J0hXw/Bv/01STHdGWdek7yd6NxGZRltlDlH6yde909BTrGYPN3kMEjUbhh+PjVbTsoE0F1whbvR0PI9POulgyLWN/yc3qmdcVs2/YB1EGVkgQDyMDp+FKX4cmJthGMHdW3g7e40946yW7HsYmB3fIDSaUYBzpUc8VDIqN/h7xtMk7IcM+jObebNqzHSJJ0+VSYu9aa+S+bMqkLod8xB09Kn4exGIPlXV7DWzczBiTDyB50iip7b2rJ+XpoFscRGXK9oEeU0zW9aCgWwBA1PQVvAgW5BQHmD4fjQePKvmUHKOccz0pvli4Lk1f4MKi09IJwlr2qvmaZMKf7sfCt4xVFjJOisAT8ZrXBQxU22gKup8eg8q4x9hyroBozAg/Oknmg4J+6oZQasYYO4pRdQQVjzoHF432dxLaExuw/Ch7uGuDLCEqo+zNCYWy2Ju5QrJH2mB2HSs0ceVO03voax1fxFvMe63urVCYi26MV9ptpWVbhk+6/oJZYqRGihvawda214RvXpQ86M4NvVGXhxlolLzXOaaEN08q5F3LM1myefGONJO2FRblbDcwFcG+KV3seJ0NRriJO9Tn5kpRVdjqKTH1szUhaBQOHviucVjlAgHWvSWZRxqUmL06QxF0GsmlGFxBJ0FHLd99eZLy5OdVo1LS2Flqhu3soJ6VGlzcmk/FcXmbKJygjXx9fdW2Gd5GklX3ESvdkePxb3JBkDkAYnxmhcs6bHXw6iY511ddUBd3CgbljAGm2vPXlVN7Q9sJHs7Ayj7VwiD/7YOq/vHXoBvWttIZRLnwtFe7lJBymDHI9Px/MXCvHuwnFMlwoxMHUE++vWlvjKGPOk5JK2FkpFchKGPEEmJqQYgdaVThJ0TbT2R8RsZ0IqvLwfU9evTyqzvcBFDJcE1izuKloNWzrCDQMQM0AE865xdxRDGP5+fqa1i3IUkUkR7jsV1PUDWqSzNw2henSHlnFaSaIDBtQdaVnC3CICx5kCisJhXTdh86HjZJ3TToeV+gDF8IRyzMO+c0AnTURp0NVrhuw8/wCVX97YYQdapFoZbjjo7D4mu8yKtNI1+HatBmCX/iNehoRVPtMwXXvx50VYf/iJpq/BFOqsy89TO+9Twxttr0d5abSKzdzLbJuPleesTz09K4w2Ja8pW3acr+1ynrPOieK9lL1wgM+dAZAG4ncmaPs4h7A9mAGUKABGU/zqOXB23aSMW0L/AGV62VuI0aAMDrmojF49iZ1J2CjmfAVvHYrNl5DeK4wkI3tGPe1VB4faPrt6U+PHHHj51v0MLb2Ku3LmR3b9xSQB5xBJoDE4ZrbG5bZ0IO4LL8QasONIzBsuUxvTDAYVWWXhp3qKyzu2xasrFvtLiwB37beLICT5kRWU2xvZ6yXJCgTHyFZWr/KgdsbYp+YNAW8UxO9Q2kuZNddKhwzd6DXkTyxm9aE/I/w9zrXONaRUAugDehrl/wAax8ZOQ96EnEcV7NhHWp8PxAaSa1ibSMcxoRsDnPdNenDIopKXaJNe0WE3SVkGhzcKESTmaY8FG59Z38DUOHsuAATRfaGx+pt3l+wYb91iBPo0e81V+QpqjV4yi5rkccV4r9Hwr3U0K5QDExmYCY57/Kpux/H/AKUneILDTNGUnnBHXnpQWCxCsCGAZWEEESCDuCOYphgeE2bIzWUya5oBJAPqfhRjtUvR6WXHGmmu/Y4xTxIFVnGNdLEI+XxgE/EU5xeJ1B5MJHh1Hv8AmKXZjmmKMcklJKzyHHjJlV4lwXE/1j5rw/aBJK/4OQ8vdVaxmEDHQgcj1H4V6ZfxzIwij7vBbGITNdtjP+2vdYeo39Zqq8lxlUtl4ZU1TPF0uvZbMDABBHnXr3B+IXMXgBcQd9dx5TMD4iqZxbgFu27AMXUHmACPMjT10ph2X4y2GcJAFs6EffW+LWSNAnFNWifDX3D5mJp6mKLAa1vj3Dl0uJqj7xyJ+4/Oh7NrKKwcZRlxaM6i4j+xiBl1ojDQdaQWLk0ywF8AxQWNyntjKVBuOuhF1pHYeWYqW2JOUxpHWjO0KlrZjpVd4K1wpeY7BQPea1ShNTjFvSFjJOWjhOJYxSYuZhP2hPxoxO0WKA7yofX8FoBXJ0qdG8IrZRUlftXfUSbCnyaocNdzkvGrEsR56mosVcGoit4I6CsXmdI2eL2xhbEXh4n7q4xnbsWrj2zhrhyMVzDYxpIrp2y3E8aUcVxCLeuKRqGnbqAfvpPHdSaH8hWkw/8A/ZNsf8td/PpQ+K/SHYcQ2Fc+Y/FaUNi7Wvd2qH6Um/swa3GFsPwXF0xLH2WEvkzEK6oo8SzTHoKtZwrixpbRCxAjM1wgdc7Rr5Cq92c4kTIFvKJ5VcL9wm0eW3zFTyqov8C9ldv3GBAiakLlQNStH2RbLQSAYn3b0ufFC6rgCMvxHWvGyTjXexFFjazc7ok8q1QSrWVgvL+5XQya4qrAII8v51X8fjraGShnoCBPoaqB7QlT/VZf4h865btaynUSPBoHwr1v8aF3xN6w4x/c4+p/s4jf9YAR59Kjt8XVvsOf3WB9+lJT2wU7yPMzUdzj5MQVJn9kdfeKZYILpB+HG/SLDdxabZXHKC6nU+Q1onDY5V0CMRyO8+6qunEdJhDB2IJHuJg0zw3GkIJyWZA2FpJPlQlijLTR0vFgl0Pf6btxGoPiK6ONf2ZzibbyJ3DA6GkN/HXGH6uyB+7b+5RQeGt41yWSxd15FHAkaAywA1pY+LFaSIz8aPadMPwWK9nc9mx22J5jkfz41b+F4j7JOh2qu8N4FibrKMRYVQJ7xZVZfLKxJ2Bg0ebX0e4LZYNoGUzOkx0GulNLG4O0aoTUo8W9ji7a3X/EvmNx6ifUChg4o4MHUMNxrSfHo6sCkZW1gmIPMfnkRWbNik5JwMPkY98v7JLlrMZo23dcLABreDstkBIo23cUCIqksbxxua2ZE0+iv/QM7MX3Ijyqp8RQ23ysIgxV8uXhmpJ2mwIdfaAbbx8DVvDnJO30UhL/AGsZ9keLLcU2H1B0E/Kj8Vgihjccj1FefYLEZCCNI6V6Jg+KLdtd4wwGh/PKvRyQUlYsk+gfDYYnaicLgyHnlUdvE5ZBGoomxi+deVgzr5PqBKOgnGRlg0hxNpktvk+qzCfGpsZiizgD1qHH3XVFESJJivUWTnPQsI0K1ZpnLWmxUESrD0ogYsD7JrDj08quVBbmMXpW8HtI5mu7uKRtNPP5VGl1VnvACevLSsXmLSNnidsNxLd9I5GhONXUS6ZAzFVOo5RH3VBieMWu7FxZB61Nxe5acpcOVgyQDpyJ/wB1Rwf6hXyP0AD4i0dY+FRXcZbjRanBs6fV91cXHsg7D3V6SPNYfwji9s90IR7vup+l65cB+oiZYysdWJ57aQB8aRYDiti2pyrqOWXc8qNvKt1LbtmVkJkqQJDCSDPKYnyqOdfSwxGmFwNt4zE5uUEaciR16VLY4elqShZm6sBG8k7aioMFi50AJzbnlpEQeXKj7hDGZA5GTIGUaga93z51gx4sVKSX/pSkc+06ZvSI9Kyhrlm6ScsRy2rdV/hnUio3cSJylV18PwpauIbMQpAHrproN9aOxOFlg3MUuxNsaxXUekmwks+Ut7TbYa/HWlF/jt+20TK+s++oDcKtNaviQZOm9NFISTa7Bj2lxQU5bjA8oo7hvaa8SA+JcGOkddNZmlosg6dfCuPooBJmQdh+NOkLK2Xqx2gcpma6x020/J5U04RjjdgtcdtdiY8Pz515zhyysAugO/rvpV84U0KoA2C+MjefGllsVRotDEaEHUbD+dUjt1xP2OMwwGge2x/zwKuWExAYx6jp+YHxryL9MmKIxtgD7GHQ+rPcJ+AFdGCm2hZScaZ6bwbFSBroam7RcHe/hnWyQLoGdJ2LD7J/eEj1B5VTexPFhdtrJ1iDXo2Avz5is2N0+MvRXLfHlE8Q4L29vWWyXMyQYbfQjQhlOoivTuE8dTEoCsMTyUjvfuzoT4SKon6Zeyvsrox1pf1d0xdAH1bn7XgGH+YH9qqJ2f44+EuAqSVJ7y/eOhFbMvjxyR1/RljOLdTX8+z3XELnbMmsHvDYr+8p1Xz2o5UzLBGhEEUv4bfTHWluI+W+q5kcaZl/vdehFGYHEm4GUjLcTR16+I89/Ws3xVH6Sc8FNtFJ4rZNi4V5br4g7Uw4RivssdNx+FFdobPtbZKjvpJHWPtL+elVXBYoGOta/GyXHfYP1Kz0MXCySNSBoOo6edRYTGl9AKX8KxmwPmKYPCFnURJ18+vkaTP40U3NL8kZWF4YhWJY61Hxa+cygjSNPKlFzHF3AHUCOutMeJ4wG4QwiPuqnj3VAh22QriVmNq69ovh6/zqFLlonl1qV7Ftunoa1FCLELbI+z8K837UORfZBcAGhBZggCkNOpOusfDSvQXt2mDZHVipIIDAwQTIMHQg1XeO9nrJIv3s4he6g09p9bLuPqiDJ50kku2NFvpHnhx/fQOoCiJgFZWd9p8Zr0fhFu01sFG7k5gCS0Ehc0EnQSJiss8CsYnDWBctgFs4kDvAAqQAfU++mWP7PWrOUWWb2RAiTJU8w5iZ5yd/Q0KTOtnX0e1p3gK4eza3LCuDwoad9j6/yrlOGW9ZY++nSEZ3hr1lHkkeG0b77U2fGoU7ved7ltVHILmGnupO2EsKJZp9f50z4I9ouXWALYkefnSyVo4htXmDOttj3XaASQNz8PwpyLjMq5jPdGY7ZjGpigMTZJvEgQGYmfCZNb4jiclsmY5D10rzvF25SfS0C2cvxxpIBWAYHd6aVqk/0nD9T8ayoPyZA5MaXm0pXfFGPdbnbI9RQd5iQTER1I+U1S76PdVLsWYlR0pfdbbzqfHOw+ySPfSt2adATrPlFVhYk2goEzW1oVsXG4geYqE8TA0Ow6EVdRIOYxa5EbdSYkqOfmOWvWrfwh5Agk5YIG2bu6eetefpxZANEMzqSRqOm1NsH2oue0VbGHzvyEliSIjuqOUb/GklD2wKa6R6nwxACTEHUfHlzjWvDv0oY32vErsGQgS2P8KjN/mLU24723x9ktbzJbbQNkAYholu8SRmneJgzXn124WYsxJJJJJMkk6kknc1XFCtkM070WfsPxU27uQnRvnXuPCcTIBma+aLF0qwYbgyK9r7HcYD2lM8qyeZjcZKaL+NPlFwZ6HjcHbxNl7F1c1u4pVh57EdCDBB5ECvmftXwNsDiruHYNCsSjN9pDqjdDI3jmCOVe7v2kAY27SNecckIhf3mOg8pmqn+l2w93CWsRetKlxHyqytnBVt0bQQZAYbjRutXwZfRDLicdlb/Rjxs23NonbvL5bMvxB99elXb83Bct/XUhWHVT9U+h08jXg/Z2/7PFWm/vhT5N3T869PvcSNu4AGIJH3V2VcZa9lsD5R360WvimJtFg6sFbZx1j7+VVLFcFttdZ0vhFY5spUGCdWjvjnOlNsNjDcH6xUfTeIPlNSXcLZbUq68u7cZdOmhFQjLbfTGfjxTtEOEw3s4m4W2iFE6idp++mNvi9j+rNxSWGg0JPhAMzSq5w2xEZrwXURmHyINBPwbDE/XvabfU0/y1ZZZe2LLAvsWG2lu3cR2uAFTmyNAJHLn1ii8RikuHORuff90VVrnDsGUhnu5uu+YzMkZYEeFT23s20yC5eyDQDu/wCpfCgpuK0wR8eP2HbYS2SWywB0/AVsYC22sn3mkdvE4cwHuYkwZEMg8vqoPnTnEcSt27Ra2HmAJdpMDrMiqLPIWXjoMX9HuFebkkO5LsYB1YljHvrfanh+fC257xtt7Mn93RT/AJR/FTDA8bP0a2YhvZoZ5QVB9+tccMvfSUv2WOrd4eemvvAq92Zuiq4W3lt20mIJE9NJB9605t22bht+CcztkB2JgqJnl9qkONYopVpDK6gjocrirNxIexwFlI1aCfWWPzFFdnMpvBOzy27iXAX9oTcUkyRlazcX6xP7TCiF4aSdXJ0q1cDwWe37SdFzaeMafOqeuGc7u3yop7FZMODoxgt567U3Q2bYFu3G4nnJ60hbh5J1YxPUVYOF8NRQG6a70WIFX7veZQNBl18xJpPxbLcOQ7AfE7U14nclpG0Cq5jrQe3nJKyc2nwrBmiseJqOrf8A2Bs4/oUdTWUbZ4kMo15Vleb8cwB2IalOIpjfbSl2IatR9FEUYpaTX7Mk6U9xJpW6yapBizjoTXcKagbC07dKhdKupMzPGjXBuCC60MYXw3q9Yi5a4fh2FpFDsIWNy3UncxvrVf4LihaBYil/FMY15izHyHQUknY8YpFR42SWEmSZJPUn8mlRpvxZZuEdFH3n76UkVsh+k8/J+ps0Ke8C4ubSsmYqDqD06x486Q1sV0oqSpiRm4u0ejt2muJgjcwZW2qP7N5UM5kSHk93XXSCfGl93tdcuWL1i+z3luIILse44jK6jaJ1jyFBcA7PXL+Ev3zdW1ZtkFiwJzsOQA6A/GnnZrszhMbg7zqtz29psxyvqyCZXVSsxrMaxSqMY9IaUpS7KJwwfrrf76//ACFXHi+KC4lJMDYnlqCPwqHCdlmt3UvIwuWASS2xRoJVXXkZiCNDFJe0GIz3W6SfhpQkuUl+CkHxg3+5fsM5CgjUH1FGjGEGIBH591VXhDkojAkEgajypwjtPeJNZZQpm2M7Q1OJzHumPA0FcxpB1FQOzcm94E/Khb9y54Ggo2FyoJbESdvGob+K0oF8Q/QUJexNzoKdQJuY0tXZI86c8TxE20sIe/dIXyUkCfX8ap64q4NtKtnCOFXBZ+kv3rzsBbzTCLzaOpiPAGmjDaJzyaLu1gfR0I5Io9IAHypRw+89u6roCYaNOemoPpR9vEt9FQNo2XXzDEUkt32VtCQM0xymryMheMT2fs4i4l8zBCsV5MQJUn360p7Z3SWy8lH5+dWThRBtWyQZKjaY6ctKrHbW3lcEbMvx2+6nW0Ka7O8VVLT22MGRl8ZhSPhPvqrG1dkgbDSpbDwfUfOtYq5dFxwq/bb4E0YgkZh8FdZhJBXmDzB3pzgMAy93NI/OlI1bEnbQnarBwXA3RLXHmeVMxCLtO2RFC7sIpKltrqZemkU57W2IW26nvKWEdZ1HyPvpDgeIsqyVG9eZ5U5cqXSFlXsJ/oNxsRW6NHGT+x8ayo/Jh/cTZBcegL5qZ3oK89Fn00Qe8aAfeibzUHdfX87VSKEkzGQ0Pcqd71CvVXoit9nQeuW2rEFRO+lBKwylRXcYx9o0+nlAH3UMyb1YcThPaLmUd5RJ8fGl62vskQfurSpGBw2JnSK5FMruEjlQt+3rIEeAnSqKVk5QaPSuzFr23AMbaX6yE3NOYUhiPcPiKR/os499ExyK5i3e/VtOwJ+offp60+/QtiwXv4Zoyuu3UOuVviqD1qmW+DeyxFxbshbVxl6FsrEA+Wk+NB6uzkm2qPR+J214VjHBabF1pW2wlfZv9ZfEBswjkIjaqb287OewcX7Pewt09xpnI0SbbfMHmKunESOLcKFxdb+HzeZKDvr/AIkhx4g1Xew/HUdGwOLGa1cGVZ5dBPJgdVPp0oLWwuuhX2eugWwDuD9/86sSt99J+J8DfBXDbJLKe8lyNHQ7Hz0gjkRRli8GUGo5Fs1Yn9NByOKhxWldW3ioMQ5NJorTB22n30BiKNUaUFfXU86PH2TlL0S8Kw/tLiqdp1q48V4o9soltJAWSekmAPcJ9arvZ0AXC0bCPxP5611e4/8ArHBSRmOvWNB8BVca2QyP6aLbgcUblhWIg97T/G1BsdfX8a54NjBcsyBEMyx/C3+qtZ9fzyJoy7I+j0/ghJsW9R9X7zSvtphs1kN+yT8fyaN7POpw9vfYjn+0elF8Xw/tLLrzjT01qiFPKi8H1NT4ziLC46hNncTr+0RUGIWGYHeusfxFFu3BEkO/wY0V2dLo0vELrbIPDSnfDbuIYDMQo6DSkuA4k1y4lu3bJZzA5AcpJjQVZ7nDMYp7q226d+CfIECa5ySESYj7YubdpHzaq4nxBBHzIqvYZw0KSQfHx1qzcR4ebgZb4JgAhOpnXfltSB3Y3IvIVbMcp6LAAH561g8h1JP19xcitBv0cisqS1hHIBhj6r+NZVbj9jL8Mjh7TaeNA3LZ+dNb2IDAA90jmB+eXyoRyhmWG35099K8cT6COWXsUXzoSNvzpQdyJB3kUdcZCMoZtwJIgc/d/KhsSEUQrCR10mRO/nSpDymQvbMbGuCp6bRPKukvKR+sP3T5munuo0GI0AHh1PuqlE3P0RNpMVmGtKLiZ9VBVmEE90EE6c9K6v4q3qBJPXTX0HjXeAu5boYzoDOk8oGlNFKyc5viyTiCWrbm5h2OWZNvI8r+4Suo/unblyAFvW7V0z9Ro1gR65TtViXi1vaG9wqK/j7DiGtZvNQavLGntOjLDM1pqypYjh7CO8rDzIoc4HNpHx++rJiDhjr7J/R3Eemaqzxm7aB/VtdHgWBA+E/Gl+OQ/wAkWOext5MPjbbA95iUOvPQgfxKtF/pZtG3jmInJdRLi9JIyt/8Qf8AFVBw2LZHS4N0ZWHmpBHyr1L9LVkXsHhMWmoAKEj9lgCCfcvvo8RXL7CD9GfH/o+MFtmAS/CGdlef1bHwklT4PTvjPZ7B4bGu18uttz7S0g7o1PfVm3lXkQIry20Na9rw908V4X7Qd7E4fVhzLqIc+VxAG/eVqaqEeyRMTh8bbbDG4JHetNMlD48yOR6iDuKpl+y9i41u4uVlMEfgeYI1B8a1guJ5SCZBBkELBB91XPEYBeJWx3lS/bAlz9X2c65vACSDyII56SyRLYcldlYS7NYxGtT8VwtpHCWS2VRBZjJc/tEfZnoOUc5oBQ2o6VmlF2ehDJFoxniocfhLlvL7RGTOMy5tCR1jcesVZMDbt4RBeupnvHW3bOqoOT3BzPML5HciK5j8Tcv3Ge4+ZmMyT7h/KqRTSM85xctHWFv+ztsxPWon4lbP2YofGPltxuZiJj4wflSx3/ut/kb7xVsa1Zlyyt0Xjs1jkdHtrupV48DKsff7OmNrKSZB8556+kbVROB8QFu6uYsoaUY5CIVtJmSNDDf4autm0R3SZImT4zXTW0Iuj0zsyW+jrABEnckc/KnlVfsnfU2ipfKQx5gdORqzinRzPOeOcLy4xUA0d1I/dO/u1qbEdlHcNcT6zS2V1CkkyTBDEe+KsHa/ilvB2GxLKCwhE0JJLnYRrtJ05A1VOFfpAt3HXMhtq2aS4aM0SCCwED0pJzcdna9nOD4qMEWS5adWJB2ymBodSO8sjkY3pxwri9i4olVD96Uyy2pmQ3JddP5U3GNt3FDsEcqDrlBOn1gpPUiKQYTs8j3GuLC23UZCH76MfraDuEN05RyrLPI+Vr2Gmh1jcuItkEgOCVVhPdaBuRsJ6/hVTx3DM1j2lyMokF1mbbDQgyJifSrXgOF+xWC5uyxYsRBGoKwASNCAZNEDFAkqZk6ZDBlZyzAP1dfjXOKbuX4OcbPOrCsqx7RNJ+3HM8idKyrfc4XYYkgLB20WspPjf3E4MoL3T086HxTkDbSsz3R9lz4E2z/M++uHa6dDaEQen+/7q1vEzQvJiLXvrqDPMjWoLlxYEa/j6bCjRhbh/sJ8e6P9dQHhTkn9Uw8sv++gsbGfkxYva6NZmfP5RQ64nko15zTduDsf7M+5f+5UtrgkGTbueU2wPnPxpljZOWeLFKBxHdEHaJNOeE4ZXci4ziBEqxWDO0r8qKXhymCbDnzdY/hzRTLDHLthn99v73po42nZOWZNUbPALJ3uXvS45rX/AOM2T/aX/W49MLeJYbYdvU2/uY1I+LcbYdz5Nb+9hV0jO5v0V3F9mLQ+rcvH/wBw/fSjEdkVJ+vcjxIP3VdWxtz/ANNc99v/ALlctin/APT3R/8Az/7lGkBykUE9kF/bb4fhXodrhgv8GbDsSfZ5YPPuED5ZPjQD4i5v7C57k+56cdmeKLF23cVram2ZL5RuCDEE88lLKq0PCUm9lL4b2Yw9v9bdYsqEQhI756Ec10q28Axws4s4jNCXFRHTQDKAArRG6xPlIqtYx/a3oVWZEiQBJ8J1A8/EmiXx1waezc+iD/VS2vbD9XpBHbDsulnEOQ9xVc51VSIg7gacjNAWeJNYtm2rMykd6Nc0ExtuJ+80VxvtDfewllrT90ZUcgZgu24JEgaTPKt2MGbltYs3hlAEqFAGnVnE0vYz0E43B2sRY+lWEJKqFuIu+mgaOo2PXQ7k0uRFsql1lEwWRH8PtMJ+qD13IjrRmDw2KRycOcQrEQZt2mBHRhmE+tbTgN9szX7N26zbnLbUabAA3CAIjT3RSPGrsf5qVCPEYxHJZryM7atLD5k0uuX0ghWDeCd75TVtTgsf8i48xbPyei0wACkfRr4blAtx46Zvvrvj2d82tIpH9HG7BJdByggT5gj8Kx+zZ5XH94P+mr0mGI/5e9/Cn++pBZjX6Je/gX/fTqNEnksodnsvcO15h5j+VXDBYd1tqHbM6DKWiM0aAnxiATRj3XH/ACl/+FP+5QV3ijWzmOEvjzFv4zc2oOIykXfsfcj2ihWOs6ZfEcyKtoqkdisct0lrZCyveVhLKZmDlaPWTyqXtt2vGDUW7atcvNuEgZB1Yk90nkN+fmwbB+1n/E3URbroton6oEO50MkqdhIERu3hVM41woKnfxDNcX+rVyoD6yQpyjWI0nTQHea0va/FBSUwbKxESCCI6Fc3x+FU64MQsTbuGDMNqNdToG0nwqGSDkdyRY2uX0Cot64qFVJQXBlDZcxGUDQTI15+dWPg3GDa9mDeQoVb2gnRGABEweckbA+leevjL2kYYjWZW2qk9dRqfWicXiLgA9nh7jNszEEKfIAg++ovDO1YFKj2bhfGldGue0DJL94gZQFYrBI1M8ppVxi5bvtbuhWLKxDEED6n9m4iVMncEEEGCRXl/D8ZjQpX2F2DmkJmynNEgpmjWPWrBZ4hiGW4tzB4lVuFC2RRMLyHeESdT5U3xSen0NzLvaxqqAuqxplBMDwFZVVtYxAAPoWN08P/AL1lP8TF+QZPwhuorn+jDzI91ZWVfkxOCNNw0DnUbYZRzJrKynRGRGyqOtRyPGsrKYCJEWa7s6mtVlcBkzVoXIrKymAiVby9KkFweVZWUg9s0HHU+4VHf4Y11dNCdmBAPy+dZWUWFCnB8AuYbMufPmYsZAkk9W5+6nWF4AzauAPCQayspWkFSYcOEBNjHlXDcPJ0zk1lZQRxycIyiA0eVSW7F3bOY86ysrkBnBwdzncNR/QX/wCq1ZWUwpoYJ/8AqtXRwlz/AKrVlZRFM+iPEe0aPSo34MG3M+YX8KysoDWZg+CpZcvalGIIzKcpg/uxQr9n7eYtuxMlm7xJ6lmkzW6ygdbOxwxBynzJrTcPT9kegH/msrKLFOreAtjZfiflRgWBoF/hX8K3WUBji4SeQHlH4VPh7c6GduUVlZXHBq4QdK1WVlE4/9k=',
//     author: 'Emily Davis',
//     date: new Date('2023-09-22T09:45:00Z'),
//   },
// ];

// interface BlogAuthorProps {
//   date: Date;
//   name: string;
// }

// const BlogAuthor = (props: BlogAuthorProps) => {
//   return (
//     <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
//       <Image
//         borderRadius="full"
//         boxSize="40px"
//         src="https://100k-faces.glitch.me/random-image"
//         alt={`Avatar of ${props.name}`}
//       />
//       <Text fontWeight="medium">{props.name}</Text>
//       <Text>—</Text>
//       <Text>{props.date.toLocaleDateString()}</Text>
//     </HStack>
//   );
// };

// const BlogTags = (props: { tags: string[] }) => {
//   return (
//     <HStack spacing={2} marginTop={3}>
//       {props.tags.map((tag) => {
//         return (
//           <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
//             {tag}
//           </Tag>
//         );
//       })}
//     </HStack>
//   );
// };

// const ArticleList = () => {
//   return (
//     <Container maxW={'7xl'} p="12">
//       <Heading as="h1" textAlign="center">
//         Blog
//       </Heading>
//       <Divider marginTop="5" />
//       <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={10} marginTop="5">
//         {newsArticles.map((article) => (
//           <Box key={article.id}>
//             <Box
//               bg="white"
//               boxShadow={'2xl'}
//               rounded={'md'}
//               p={6}
//               overflow={'hidden'}
//               transition={'transform 0.2s, box-shadow 0.2s'}
//               _hover={{ transform: 'scale(1.02)', boxShadow: 'xl' }}>
//               <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
//                 <Image
//                   src={article.imageSrc}
//                   alt={article.title}
//                   objectFit={'cover'}
//                   w={'full'}
//                   h={'full'}
//                 />
//               </Box>
//               <BlogTags tags={article.tags} />
//               <Heading fontSize={'xl'} fontFamily={'body'}>
//                 {article.title}
//               </Heading>
//               <Text
//                 color={'gray.500'}
//                 fontSize={'sm'}
//                 fontWeight={500}
//                 mt={2}>
//                 {article.content}
//               </Text>
//               <BlogAuthor name={article.author} date={article.date} />
//             </Box>
//           </Box>
//         ))}
//       </SimpleGrid>
//     </Container>
//   );
// };

// export default ArticleList;



// import React from 'react';
// import {
//   Box,
//   Heading,
//   Image,
//   Text,
//   Divider,
//   HStack,
//   Tag,
//   SimpleGrid,
//   Container,
//   VStack,
// } from '@chakra-ui/react';

// const newsArticles = [
//   {
//     id: 1,
//     title: 'How to Fix Common Household Plumbing Issues',
//     tags: ['Plumbing', 'DIY'],
//     content:
//       'Learn how to fix common household plumbing issues on your own with our step-by-step guide.',
//     imageSrc:
//       'https://example.com/plumbing-image.jpg', // Replace with the actual image URL
//     author: 'John Doe',
//     date: new Date('2023-09-25T08:00:00Z'),
//   },
//   {
//     id: 2,
//     title: 'Top 10 Tools Every Handyman Should Have',
//     tags: ['Tools', 'Handyman'],
//     content:
//       'Discover the essential tools that every handyman should have in their toolkit.',
//     imageSrc:
//       'https://example.com/tools-image.jpg', // Replace with the actual image URL
//     author: 'Jane Smith',
//     date: new Date('2023-09-24T10:30:00Z'),
//   },
//   {
//     id: 3,
//     title: 'Home Electrical Wiring: A Comprehensive Guide',
//     tags: ['Electrical', 'DIY'],
//     content:
//       'Get a comprehensive guide to home electrical wiring, from basic concepts to advanced techniques.',
//     imageSrc:
//       'https://example.com/electrical-image.jpg', // Replace with the actual image URL
//     author: 'Alice Johnson',
//     date: new Date('2023-09-23T14:15:00Z'),
//   },
// ];

// function Blog() {
//   return (
//     <Container maxW="container.lg">
//       <Heading as="h1" size="xl" mb={5}>
//         Welcome to the Blog
//       </Heading>
//       <SimpleGrid columns={1} spacing={6}>
//         {newsArticles.map((article) => (
//           <Box key={article.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
//             <Image src={article.imageSrc} alt={article.title} />
//             <Box p={6}>
//               <Heading as="h2" size="lg" mb={2}>
//                 {article.title}
//               </Heading>
//               <Text fontSize="sm" color="gray.500" mb={4}>
//                 By {article.author} on {article.date.toLocaleDateString()}
//               </Text>
//               <Text fontSize="md" mb={4}>
//                 {article.content}
//               </Text>
//               <HStack spacing={2}>
//                 {article.tags.map((tag) => (
//                   <Tag key={tag} size="sm" colorScheme="teal">
//                     {tag}
//                   </Tag>
//                 ))}
//               </HStack>
//             </Box>
//           </Box>
//         ))}
//       </SimpleGrid>
//     </Container>
//   );
// }

// export default Blog;



import React from 'react';
import {
  Box,
  Heading,
  Text,
  Tag,
  Container,
  VStack,
  HStack,
  Image,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const newsArticles = [
  {
    id: 1,
    title: 'How to Fix Common Household Plumbing Issues',
    tags: ['Plumbing', 'DIY'],
    content:
      'Learn how to fix common household plumbing issues on your own with our step-by-step guide.',
    imageSrc:
      'data:image/jpeg;base64,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', // Replace with the actual image URL
    author: 'John Doe',
    date: new Date('2023-09-25T08:00:00Z'),
  },
  {
    id: 2,
    title: 'Top 10 Tools Every Handyman Should Have',
    tags: ['Tools', 'Handyman'],
    content:
      'Discover the essential tools that every handyman should have in their toolkit.',
    imageSrc:
      'data:image/jpeg;base64,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', // Replace with the actual image URL
    author: 'Jane Smith',
    date: new Date('2023-09-24T10:30:00Z'),
  },
  {
    id: 3,
    title: 'Home Electrical Wiring: A Comprehensive Guide',
    tags: ['Electrical', 'DIY'],
    content:
      'Get a comprehensive guide to home electrical wiring, from basic concepts to advanced techniques.',
    imageSrc:
      'data:image/jpeg;base64,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', // Replace with the actual image URL
    author: 'Alice Johnson',
    date: new Date('2023-09-23T14:15:00Z'),
  },
];

function Blog() {
  const carouselStyle = `
    .carousel-root {
      max-width: 800px;
      margin: 0 auto;
      background-color: #f8f8f8;
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    .carousel-slider {
      display: flex;
      justify-content: center;
    }

    .slide {
      background-color: white;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    }

    .slide img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    }
  `;

  return (
    <Container maxW="container.lg">
      <style>{carouselStyle}</style>

      <Heading as="h1" size="xl" mb={5}>
        Welcome to the Blog
      </Heading>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {newsArticles.map((article) => (
          <Box key={article.id} className="slide">
            <Image
              src={article.imageSrc}
              alt={article.title}
            />
            <Box p={4}>
              <Heading as="h2" size="lg" mb={2}>
                {article.title}
              </Heading>
              <Text fontSize="sm" color="gray.500" mb={4}>
                By {article.author} on {article.date.toLocaleDateString()}
              </Text>
              <Text fontSize="md" mb={4}>
                {article.content}
              </Text>
              <HStack spacing={2}>
                {article.tags.map((tag) => (
                  <Tag key={tag} size="sm" colorScheme="teal">
                    {tag}
                  </Tag>
                ))}
              </HStack>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Container>
  );
}

export default Blog;



// import React from 'react';
// import {
//   Box,
//   Heading,
//   Text,
//   Tag,
//   Container,
//   VStack,
//   HStack,
//   Image,
// } from '@chakra-ui/react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const newsArticles = [
//   {
//     id: 1,
//     title: 'How to Fix Common Household Plumbing Issues',
//     tags: ['Plumbing', 'DIY'],
//     content:
//       'Learn how to fix common household plumbing issues on your own with our step-by-step guide.',
//     imageSrc: 'https://example.com/plumbing.jpg', // Replace with the actual image URL
//     author: 'John Doe',
//     date: new Date('2023-09-25T08:00:00Z'),
//   },
//   {
//     id: 2,
//     title: 'Top 10 Tools Every Handyman Should Have',
//     tags: ['Tools', 'Handyman'],
//     content:
//       'Discover the essential tools that every handyman should have in their toolkit.',
//     imageSrc: 'https://example.com/tools.jpg', // Replace with the actual image URL
//     author: 'Alice Johnson',
//     date: new Date('2023-09-23T14:15:00Z'),
//   },
//   {
//     id: 3,
//     title: 'The Art of Interior Design',
//     tags: ['Interior Design', 'Home Decor'],
//     content:
//       'Explore the world of interior design and learn how to transform your living space into a masterpiece.',
//     imageSrc: 'https://example.com/interior-design.jpg', // Replace with the actual image URL
//     author: 'Emily Smith',
//     date: new Date('2023-09-20T10:30:00Z'),
//   },
//   {
//     id: 4,
//     title: 'Gardening Tips for a Green Thumb',
//     tags: ['Gardening', 'Outdoor'],
//     content:
//       'Get expert gardening tips and tricks to maintain a beautiful garden all year round.',
//     imageSrc: 'https://example.com/gardening.jpg', // Replace with the actual image URL
//     author: 'David Wilson',
//     date: new Date('2023-09-18T16:45:00Z'),
//   },
// ];

// function Blog() {
//   const carouselStyle = `
//     .carousel-root {
//       max-width: 800px;
//       margin: 0 auto;
//       background-color: #f8f8f8;
//       border-radius: 10px;
//       box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//     }

//     .carousel-slider {
//       display: flex;
//       justify-content: center;
//     }

//     .slide {
//       background-color: white;
//       border-radius: 10px;
//       padding: 20px;
//       box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
//     }

//     .slide img {
//       max-width: 100%;
//       height: auto;
//       border-radius: 5px;
//       box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
//     }
//   `;

//   return (
//     <Container maxW="container.lg">
//       <style>{carouselStyle}</style>

//       <Heading as="h1" size="xl" mb={5}>
//         Welcome to the Blog
//       </Heading>
//       <Carousel
//         showThumbs={false}
//         infiniteLoop={true}
//         autoPlay={true}
//         interval={5000}
//       >
//         {newsArticles.map((article) => (
//           <Box key={article.id} className="slide">
//             <Image
//               src={article.imageSrc}
//               alt={article.title}
//             />
//             <Box p={4}>
//               <Heading as="h2" size="lg" mb={2}>
//                 {article.title}
//               </Heading>
//               <Text fontSize="sm" color="gray.500" mb={4}>
//                 By {article.author} on {article.date.toLocaleDateString()}
//               </Text>
//               <Text fontSize="md" mb={4}>
//                 {article.content}
//               </Text>
//               <HStack spacing={2}>
//                 {article.tags.map((tag) => (
//                   <Tag key={tag} size="sm" colorScheme="teal">
//                     {tag}
//                   </Tag>
//                 ))}
//               </HStack>
//             </Box>
//           </Box>
//         ))}
//       </Carousel>
//     </Container>
//   );
// }

// export default Blog;

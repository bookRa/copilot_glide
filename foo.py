# had to import this myself 😛
import datetime

# So this was all copilot created
def calculate_days_between_dates(begin, end):
    begin_date = datetime.datetime.strptime(begin, "%Y-%m-%d")
    end_date = datetime.datetime.strptime(end, "%Y-%m-%d")
    return ( abs((begin_date - end_date).days))


# So this was all copilot created
def test_calculate_days_between_dates():
    """ Test for calculate_days_between_dates """
    assert calculate_days_between_dates("2016-01-15", "2016-01-21") == 6
    assert calculate_days_between_dates("2016-01-01", "2016-01-01") == 0
    assert calculate_days_between_dates("2016-01-01", "2016-01-02") == 1
    print()
    print("All tests passed!")

test_calculate_days_between_dates()